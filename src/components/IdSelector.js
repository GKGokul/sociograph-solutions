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
	sortBy,
	setsortBy,
}) => {
	useEffect(() => {
		// setviewerId(1);
		setcurrentPage(1);
		setsortBy("none");
		function fetchReview() {
			fetchData(baseUrl, productId, viewerId).then(
				(data) => {
					// console.log(data.reviews);
					localStorage.setItem(
						"backupAllReviewData",
						JSON.stringify(data.reviews)
					);
					// console.log(
					// 	JSON.parse(localStorage.getItem("backupAllReviewData"))
					// );
					setallReviewData(data.reviews);
					setcurrentReviews(
						allReviewData.slice(
							indexOfFirstReview,
							indexOfLastReview
						)
					);
					setloading(!loading);
				},
				(err) => {
					// alert(err);
					alert(
						"An error has occurred. Check your Network. Please contact admin if this persists."
					);
					setloading(!loading);
				}
			);
		}

		fetchReview();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [productId, viewerId]);

	useEffect(() => {
		console.log("useeffect");
		setcurrentReviews(
			allReviewData.slice(indexOfFirstReview, indexOfLastReview)
		);
		// console.log(backupAllReviewData + "updated");
		// eslint-disable-next-line react-hooks/exhaustive-deps
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

		if (sortOption === "none") {
			setsortBy("none");
			console.log(
				JSON.parse(localStorage.getItem("backupAllReviewData"))
			);
			setallReviewData(
				JSON.parse(localStorage.getItem("backupAllReviewData"))
			);
		} else if (sortOption === "overall") {
			// console.log(allReviewData);
			setsortBy("overall");
			let key = "ratings.Overall";
			const sortedData = sortDataOnKey(allReviewData, key);
			setallReviewData(sortedData);
			setcurrentReviews(
				sortedData.slice(indexOfFirstReview, indexOfLastReview)
			);
		} else if (sortOption === "usefulness") {
			setsortBy("usefulness");
			let key = "usefulness";
			const sortedData = sortDataOnKey(allReviewData, key);
			setallReviewData(sortedData);
			setcurrentReviews(
				sortedData.slice(indexOfFirstReview, indexOfLastReview)
			);
		} else if (sortOption === "connection") {
			setsortBy("connection");
			let key = "reviewer.connection_level";
			const sortedData = sortDataOnKey(allReviewData, key);
			setallReviewData(sortedData);
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
					<Dropdown.Item
						as="button"
						eventKey="none"
						key="none"
						active={sortBy === "none" ? true : false}
					>
						None
					</Dropdown.Item>
					<Dropdown.Item
						as="button"
						eventKey="overall"
						key="overall"
						active={sortBy === "overall" ? true : false}
					>
						Overall
					</Dropdown.Item>
					<Dropdown.Item
						as="button"
						eventKey="usefulness"
						key="usefulness"
						active={sortBy === "usefulness" ? true : false}
					>
						Usefulness
					</Dropdown.Item>
					<Dropdown.Item
						as="button"
						eventKey="connection"
						key="connection"
						active={sortBy === "connection" ? true : false}
					>
						Connection
					</Dropdown.Item>
				</DropdownButton>
			</div>
		</div>
	);
};

export default IdSelector;
