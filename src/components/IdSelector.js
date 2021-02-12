import React, { useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { fetchData, sortDataOnKey } from "../util";

const IdSelector = ({
	productId,
	setproductId,
	viewerId,
	setviewerId,
	allReviewData,
	setallReviewData,
	setloading,
	loading,
	currentPage,
	setcurrentPage,
	currentReviews,
	setcurrentReviews,
	indexOfLastReview,
	indexOfFirstReview,
}) => {
	// const [allVids, setallVids] = useState([]);

	let backupAllReviewData = allReviewData;

	useEffect(() => {
		// setviewerId(1);
		setcurrentPage(1);

		async function fetchReview() {
			await fetchData(baseUrl, productId, viewerId).then((data) => {
				console.log(data.reviews);
				setallReviewData(data.reviews);
				setcurrentReviews(
					allReviewData.slice(indexOfFirstReview, indexOfLastReview)
				);
				setloading(!loading);
			});
		}

		fetchReview();
	}, [productId, viewerId]);

	useEffect(() => {
		console.log("useeffect");
		setcurrentReviews(
			allReviewData.slice(indexOfFirstReview, indexOfLastReview)
		); // console.log(backupAllReviewData + "updated");
	}, [allReviewData]);

	// useEffect(() => {
	// 	setloading(true);
	// 	// console.log("ViewweId:", viewerId);
	// 	async function fetchReview() {
	// 		await fetchData(baseUrl, productId, viewerId).then((data) => {
	// 			if (!loading) {
	// 				// console.log(data.reviews);
	// 				setallReviewData(data.reviews);
	// 				setloading(false);
	// 			}
	// 		});
	// 	}
	// 	fetchReview();
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [viewerId]);

	// useEffect(() => {
	// 	console.log(allReviewData);
	// 	// if (Object.keys(allReviewData).length > 0) {
	// 	// 	let temp = [];
	// 	// 	for (let id = 1; id <= allReviewData.data.reviews.length; id++) {
	// 	// 		temp.push(id);
	// 	// 	}
	// 	// 	setallVids(temp);
	// 	// }

	// 	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [allReviewData]);

	const baseUrl = "http://www.i2ce.in";

	let allPids = [];
	for (let pid = 1; pid <= 20; pid++) {
		allPids.push(pid);
	}
	let allVids = [];
	for (let vid = 1; vid <= 10; vid++) {
		allVids.push(vid);
	}

	// Ideally this should fetch all the PIDs
	// const loadAllPids = () => {
	// 	for (let pid = 1; pid <= 20; pid++) {
	// 		allPids.push(pid);
	// 	}
	// };

	// console.log("rerender");
	const handleProductSelect = (option) => {
		setproductId(option);
		setviewerId(1);
		setloading(!loading);
		console.log("Product:" + option + " Viewer: " + 1);
	};

	const handleViewerSelect = (option) => {
		setviewerId(option);
		setloading(!loading);
		console.log("Viewer:" + option);
	};

	const handleSortSelect = (sortOption) => {
		setcurrentPage(1);
		console.log(sortOption);
		setallReviewData(backupAllReviewData);

		if (sortOption === "none") {
			setallReviewData(backupAllReviewData);
		} else if (sortOption === "overall") {
			// console.log(allReviewData);
			let key = "ratings.Overall";
			const sortedData = sortDataOnKey(backupAllReviewData, key);
			// console.log(sortedData);
			setallReviewData(sortedData);
			// setcurrentPage(1);
			// indexOfLastReview = 3;
			// indexOfFirstReview = indexOfLastReview - 3;
			setcurrentReviews(
				sortedData.slice(indexOfFirstReview, indexOfLastReview)
			);
		} else if (sortOption === "usefulness") {
			let key = "usefulness";
			const sortedData = sortDataOnKey(backupAllReviewData, key);
			setallReviewData(sortedData);
			// setcurrentPage(1);
			// indexOfLastReview = 3;
			// indexOfFirstReview = indexOfLastReview - 3;
			setcurrentReviews(
				sortedData.slice(indexOfFirstReview, indexOfLastReview)
			);
		} else if (sortOption === "connection") {
			let key = "reviewer.connection_level";
			const sortedData = sortDataOnKey(backupAllReviewData, key);
			setallReviewData(sortedData);
			// setcurrentPage(1);
			// indexOfLastReview = 3;
			// indexOfFirstReview = indexOfLastReview - 3;
			setcurrentReviews(
				sortedData.slice(indexOfFirstReview, indexOfLastReview)
			);
		}
	};

	return (
		<div className="topNavBar">
			<div className="IdSelector">
				<div className="ProductId">
					<DropdownButton
						id="dropdown-item-button"
						title="Product "
						onSelect={handleProductSelect}
					>
						{/* <Dropdown.ItemText>Select Ciewer:</Dropdown.ItemText> */}
						{allPids.map((pid) => (
							<Dropdown.Item
								as="button"
								eventKey={pid}
								key={pid}
								value={pid}
								active={
									pid == (productId || "1") ? true : false
								}
							>
								{pid}
							</Dropdown.Item>
						))}
					</DropdownButton>
				</div>
				<div className="pnvid viewerId">
					<DropdownButton
						id="dropdown-item-button"
						title="Viewer "
						onSelect={handleViewerSelect}
					>
						{/* <Dropdown.ItemText>Select User:</Dropdown.ItemText> */}
						{allVids.map((vid) => (
							<Dropdown.Item
								as="button"
								eventKey={vid}
								key={vid}
								active={vid == (viewerId || "1") ? true : false}
							>
								{vid}
							</Dropdown.Item>
						))}
					</DropdownButton>
				</div>
			</div>
			<div className="sortSelection">
				<DropdownButton
					id="dropdown-sort-button"
					title="Sort by:  "
					onSelect={handleSortSelect}
				>
					<Dropdown.Item as="button" eventKey="none" key="none">
						None
					</Dropdown.Item>
					<Dropdown.Item as="button" eventKey="overall" key="overall">
						Overall
					</Dropdown.Item>
					<Dropdown.Item
						as="button"
						eventKey="usefulness"
						key="usefulness"
					>
						Usefulness
					</Dropdown.Item>
					<Dropdown.Item
						as="button"
						eventKey="connection"
						key="connection"
					>
						Connection
					</Dropdown.Item>
				</DropdownButton>
			</div>
		</div>
	);
};

export default IdSelector;
