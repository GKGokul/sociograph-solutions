import React, { useState, useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { fetchData } from "../util";

const IdSelector = () => {
	const [productId, setproductId] = useState("1");
	const [viewerId, setviewerId] = useState("1");

	const [allReviewData, setallReviewData] = useState({});
	const [review, setreview] = useState({});
	const [allVids, setallVids] = useState([]);

	useEffect(() => {
		async function fetchReview() {
			await fetchData(baseUrl, productId, viewerId).then((data) => {
				// console.log(data);
				setallReviewData({ ...allReviewData, data });
			});
		}
		fetchReview();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [productId]);

	useEffect(() => {
		console.log(allVids);
		console.log("ViewweId:", viewerId);
	}, [viewerId]);

	useEffect(() => {
		console.log(allReviewData);
		if (Object.keys(allReviewData).length > 0) {
			let temp = [];
			for (let id = 1; id <= allReviewData.data.reviews.length; id++) {
				temp.push(id);
			}
			setallVids(temp);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [allReviewData]);

	const baseUrl = "http://www.i2ce.in";

	let allPids = [];
	for (let pid = 1; pid <= 20; pid++) {
		allPids.push(pid);
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
		console.log("Vviewer:" + option);
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
