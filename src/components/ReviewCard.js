import React from "react";
import Card from "react-bootstrap/Card";

const ReviewCard = ({ review }) => {
	return (
		<div className="ReviewCardSection">
			<Card style={{ width: "100%", height: "10rem" }}>
				{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
				<Card.Body>
					<Card.Title>{review.title}</Card.Title>
					<Card.Text>
						{review.friend ? review.reviewer.name : "Anonymous"}
					</Card.Text>
					<Card.Text>{review.comment} </Card.Text>
					<Card.Text>{review.usefullness}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ReviewCard;
