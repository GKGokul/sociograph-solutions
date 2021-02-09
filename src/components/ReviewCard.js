import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Rating from "@material-ui/lab/Rating";

const ReviewCard = ({ review }) => {
	return (
		<div className="ReviewCardSection">
			<Card>
				{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
				<Container>
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
									ajshflkauhvsleufkhalbkuvfhlavkuhebfuklavshblufkhlwuifhqlwoiuefhlvbakuhfsjvdbcbaleifoxiuweoiucfqolvjfsgbldjkj
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
												review.ratings
													.discounts_and_offers
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
												review.ratings
													.matches_description
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
				</Container>
			</Card>
		</div>
	);
};

export default ReviewCard;
