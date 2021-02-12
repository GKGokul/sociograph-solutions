import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Rating from "@material-ui/lab/Rating";
import DownArrow from "../static/arrow-down.svg";
// import { sortData } from "../util";

const ReviewCard = ({ review }) => {
	const [expandState, setexpandState] = useState(false);

	return (
		<div className="ReviewCardSection">
			<Card>
				{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
				<Row>
					<Col>
						<Card.Body>
							<h4>{review.title}</h4>
							<p>
								{review.friend
									? " - " + review.reviewer.name
									: "Anonymous"}
							</p>
							{/* <Card.Text>{review.comment} </Card.Text> */}
							<p>
								Coments : {review.comment}
								{/* ajshflkauhvsleufkhalbkuvfhlavkuhebfuklavshblufkhlwuifhqlwoiuefhlvbakuhfsjvdbcbaleifoxiuweoiucfqolvjfsgbldjkj */}
							</p>
							<p>Usefulness: {review.usefulness}</p>
						</Card.Body>
					</Col>
					{/* <Col xs={2}></Col> */}
					<Col className="ratingCol">
						<div className="rating">
							<div>
								<Rating
									name="read-only"
									value={review.ratings.Overall}
									readOnly
									size={"large"}
								/>
							</div>
							<div className="pairRating">
								<div className="pairRating1">
									<div className="ratingDesription">
										Delivery
									</div>
									<Rating
										name="read-only"
										value={review.ratings.delivery_time}
										readOnly
										size={"small"}
									/>
								</div>

								<div className="pairRating2">
									<div className="ratingDesription">
										Offers
									</div>
									<Rating
										name="read-only"
										value={
											review.ratings.discounts_and_offers
										}
										readOnly
										size={"small"}
									/>
								</div>
							</div>
							<div className="pairRating">
								<div className="pairRating1">
									<div className="ratingDesription">
										Description
									</div>
									<Rating
										name="read-only"
										value={
											review.ratings.matches_description
										}
										readOnly
										size={"small"}
									/>
								</div>
								<div className="pairRating2">
									<div className="ratingDesription">
										Photo
									</div>
									<Rating
										name="read-only"
										value={review.ratings.matches_photo}
										readOnly
										size={"small"}
									/>
								</div>
							</div>
							<div className="pairRating">
								<div className="pairRating1">
									<div className="ratingDesription">
										Packaging
									</div>

									<Rating
										name="read-only"
										value={review.ratings.packaging}
										readOnly
										size={"small"}
									/>
								</div>
								<div className="pairRating2">
									<div className="ratingDesription">
										Price
									</div>
									<Rating
										name="read-only"
										value={review.ratings.price}
										readOnly
										size={"small"}
									/>
								</div>
							</div>
						</div>
					</Col>
				</Row>
				<div className="extraDetails">
					{review.reviewer.age}

					<h1>
						{/* {JSON.stringify(
							sortData(
								review,
								"reviewer.liked_products",
								1,
								"value"
							)
							// .slice(0, 5)
						)} */}
					</h1>

					{/* {review.reviewer.liked_products.slice(3)} */}
				</div>
				<div className="expandArrow">
					<button className="btn">
						<img
							className="arrowDown"
							src={DownArrow}
							alt="Arrow Down- Click to expand"
						/>
					</button>
				</div>
			</Card>
		</div>
	);
};

export default ReviewCard;
