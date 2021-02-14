import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import IdSelector from "./components/IdSelector";
import ReviewContainer from "./components/ReviewContainer";
import Pagination from "./components/Pagination";

import "./styles/App.scss";

function App() {
	const [loading, setloading] = useState(true);
	const [productId, setproductId] = useState(1);
	const [viewerId, setviewerId] = useState(1);
	const [sortBy, setsortBy] = useState("none");
	const [allReviewData, setallReviewData] = useState([]);

	// Pagination states
	const [currentPage, setcurrentPage] = useState(1);
	const [reviewsPerPage] = useState(3);

	const indexOfLastReview = currentPage * reviewsPerPage;
	const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
	const [currentReviews, setcurrentReviews] = useState(
		allReviewData.slice(indexOfFirstReview, indexOfLastReview)
	);

	const [toggleDarkTheme, settoggleDarkTheme] = useState(false);

	const paginate = (pageNumber) => {
		setcurrentPage(pageNumber);
		// console.log(indexOfFirstReview, indexOfLastReview);
		// setcurrentReviews(
		// 	allReviewData.slice(indexOfFirstReview, indexOfLastReview)
		// );
	};

	useEffect(() => {
		setcurrentReviews(
			allReviewData.slice(indexOfFirstReview, indexOfLastReview)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage]);

	return (
		<React.StrictMode>
			<div className={"App" + (toggleDarkTheme ? " dark-mode" : "")}>
				{/* Navbar Component to display the header. */}
				<Navbar
					toggleDarkTheme={toggleDarkTheme}
					settoggleDarkTheme={settoggleDarkTheme}
				/>
				{/* ID-Selector Component - allows the user to select the product and viewer ID, including sort options. */}
				<IdSelector
					productId={productId}
					setproductId={setproductId}
					viewerId={viewerId}
					setviewerId={setviewerId}
					allReviewData={allReviewData}
					setallReviewData={setallReviewData}
					loading={loading}
					setloading={setloading}
					setcurrentPage={setcurrentPage}
					setcurrentReviews={setcurrentReviews}
					indexOfFirstReview={indexOfFirstReview}
					indexOfLastReview={indexOfLastReview}
					sortBy={sortBy}
					setsortBy={setsortBy}
				/>
				{/* Review Container Component - displays the details of the selected products in cards style. */}
				<ReviewContainer
					toggleDarkTheme={toggleDarkTheme}
					loading={loading}
					currentReviews={currentReviews}
					productId={productId}
					viewerId={viewerId}
				/>
				{/* Pagination Component - to display and maintain pagination. */}
				<Pagination
					loading={loading}
					toggleDarkTheme={toggleDarkTheme}
					reviewsPerPage={reviewsPerPage}
					totalReviews={allReviewData.length}
					paginate={paginate}
				/>
			</div>
		</React.StrictMode>
	);
}

export default App;
