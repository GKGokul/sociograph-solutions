import React, { useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { fetchData } from "../util";

const IdSelector = ({
	productId,
	setproductId,
	viewerId,
	setviewerId,
	allReviewData,
	setallReviewData,
	setloading,
	loading,
	setcurrentPage,
}) => {
	// const [allVids, setallVids] = useState([]);

	useEffect(() => {
		setviewerId(1);
		setcurrentPage(1);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [productId]);

	useEffect(() => {
		setloading(true);
		// console.log("ViewweId:", viewerId);
		async function fetchReview() {
			await fetchData(baseUrl, productId, viewerId).then((data) => {
				if (!loading) {
					// console.log(data.reviews);
					setallReviewData(data.reviews);
					setloading(false);
				}
			});
		}
		fetchReview();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [viewerId]);

	useEffect(() => {
		console.log(allReviewData);
		// if (Object.keys(allReviewData).length > 0) {
		// 	let temp = [];
		// 	for (let id = 1; id <= allReviewData.data.reviews.length; id++) {
		// 		temp.push(id);
		// 	}
		// 	setallVids(temp);
		// }

		// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [allReviewData]);

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

	const handleProductSelect = (option) => {
		setproductId(option);
		console.log("Product:" + option);
	};

	const handleViewerSelect = (option) => {
		setviewerId(option);
		console.log("Viewer:" + option);
	};

	return (
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
							active={pid == (productId || "1") ? true : false}
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
	);
};

export default IdSelector;
