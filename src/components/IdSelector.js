import React, { useState, useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { fetchData } from "../util";

const IdSelector = () => {
	const [productId, setproductId] = useState("1");
	const [viewerId, setviewerId] = useState("1");

	const [reviewData, setreviewData] = useState({});

	// useEffect(() => {
	// 	async function initFetch() {
	// 		await fetchData(baseUrl, 1, 1).then((data) => {
	// 			// console.log(res);
	// 			setreviewData({ ...reviewData, data });
	// 		});
	// 	}
	// 	initFetch();
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

	useEffect(() => {
		async function fetchReview() {
			await fetchData(baseUrl, productId, viewerId).then((data) => {
				// console.log(data);
				setreviewData({ ...reviewData, data });
			});
		}
		fetchReview();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [productId]);

	useEffect(() => {
		console.log(allVids);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [viewerId]);

	useEffect(() => {
		console.log(reviewData);

		if (Object.keys(reviewData).length > 0) {
			allVids = [];
			for (let id = 1; id <= reviewData.data.reviews.length; id++) {
				allVids.push(id);
			}
			console.log(allVids);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [reviewData]);

	const baseUrl = "http://www.i2ce.in";

	let allPids = [];
	let allVids = [];
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
