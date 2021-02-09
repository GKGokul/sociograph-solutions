import React from "react";

const ReviewCard = ({ review }) => {
	return (
		<div className="ReviewCard">
			<h4>{review.title}</h4>
			<div> {review.friend ? review.reviewer.name : "Anonymous"}</div>
			{review.comment}
			<br />
			{review.usefullness}
			<br />
		</div>
	);
};

export default ReviewCard;
