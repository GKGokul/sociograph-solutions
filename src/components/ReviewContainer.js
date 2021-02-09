import React, { useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { v4 as uuidv4 } from "uuid";

const ReviewContainer = ({ allReviewData }) => {
	const allReviewInfo = allReviewData.data.reviews
		? allReviewData.data.reviews.length > 0
			? allReviewData.data.reviews
			: {}
		: {};

	return (
		<div className="reviewContainer">
			<h4>Render Review</h4>
			{allReviewInfo.length > 0
				? allReviewInfo.map((review) => (
						<ReviewCard review={review} key={uuidv4()} />
				  ))
				: ""}
		</div>
	);
};

export default ReviewContainer;
