import React from "react";
import ReviewCard from "./ReviewCard";

import { v4 as uuidv4 } from "uuid";

const ReviewContainer = ({
	loading,
	currentReviews,
	productId,
	toggleDarkTheme,
	viewerId,
}) => {
	if (loading) {
		return (
			<div className="loader-container">
				<div className="loader"></div>
			</div>
		);
	}

	return (
		<div
			className={
				"reviewContainer" + (toggleDarkTheme ? " dark-mode" : "")
			}
		>
			<h3>
				Reviews for Product:{productId} Viewer:{viewerId}
			</h3>
			{currentReviews.map((review) => (
				<ReviewCard
					toggleDarkTheme={toggleDarkTheme}
					review={review}
					key={uuidv4()}
				/>
			))}
		</div>
	);
};

export default ReviewContainer;
