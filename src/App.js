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
	const [allReviewData, setallReviewData] = useState([]);

	// Pagination states
	const [currentPage, setcurrentPage] = useState(1);
	const [reviewsPerPage] = useState(3);

	const indexOfLastReview = currentPage * reviewsPerPage;
	const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
	const [currentReviews, setcurrentReviews] = useState(
		allReviewData.slice(indexOfFirstReview, indexOfLastReview)
	);

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
	}, [currentPage]);

	return (
		<React.StrictMode>
			<div className="App">
				<Navbar />
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
				/>
				<ReviewContainer
					loading={loading}
					currentReviews={currentReviews}
				/>
				<Pagination
					reviewsPerPage={reviewsPerPage}
					totalReviews={allReviewData.length}
					paginate={paginate}
				/>
			</div>
		</React.StrictMode>
	);
}

export default App;
