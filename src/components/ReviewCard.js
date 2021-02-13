import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Rating from "@material-ui/lab/Rating";
import { sortDataMisc } from "../util";

import DownArrow from "../static/arrow-down.svg";
import UpArrow from "../static/arrow-up.svg";
import GreenTick from "../static/green-tick.svg";
import RedWrong from "../static/red-wrong.svg";

const ReviewCard = ({ review }) => {
	const [expandState, setexpandState] = useState(false);

	const [extraDetails, setextraDetails] = useState({ display: "none" });
	const expandToggleHandler = () => {
		if (expandState === false) {
			setexpandState(true);
			setextraDetails({
				display: "flex",
			});
		} else {
			setexpandState(false);
			setextraDetails({
				display: "none",
			});
		}
	};

	return (
		<div className="ReviewCardSection">
			<Card>
				{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
				<Row>
					<Col className="ReviewDeatils">
						<Card.Body>
							<h4>"{review.title}"</h4>
							<p>
								<i>
									{review.friend
										? " - " + review.reviewer.name
										: "Anonymous"}
								</i>
							</p>
							{/* <Card.Text>{review.comment} </Card.Text> */}
							<p>
								<span style={{ fontWeight: "500" }}>
									Comments
								</span>
								: {review.comment}
								{/* ajshflkauhvsleufkhalbkuvfhlavkuhebfuklavshblufkhlwuifhqlwoiuefhlvbakuhfsjvdbcbaleifoxiuweoiucfqolvjfsgbldjkj */}
							</p>
							<p>
								<span style={{ fontWeight: "500" }}>
									Usefulness:
								</span>
								{review.usefulness}
							</p>
							<span style={{ fontWeight: "600" }}>Like it?</span>
							<img
								className="productLiking"
								src={review.like ? GreenTick : RedWrong}
								alt="User-liking."
							/>
						</Card.Body>
					</Col>
					{/* <Col xs={2}></Col> */}
					<Col md="auto" className="ratingCol">
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
				<div className="extraDetails" style={extraDetails}>
					<Row>
						<Col className="extraDetailsCol1">
							<div>
								<p>
									<span style={{ fontWeight: "500" }}>
										Age:{" "}
									</span>
									{review.friend ? review.reviewer.age : "NA"}
									<br />
									<span style={{ fontWeight: "500" }}>
										Reviewed on:{" "}
									</span>
									{new Date(review.reviewer.timestamp * 1000)
										.toString()
										.slice(3, 15)}
									<br />
									<span style={{ fontWeight: "500" }}>
										Connection Level:{" "}
									</span>
									{review.reviewer.connection_level !== 1000
										? review.reviewer.connection_level.toFixed(
												2
										  )
										: "NA"}
								</p>
							</div>
						</Col>
						<Col className="extraDetailsCol2">
							<span style={{ fontWeight: "500" }}>Likes</span>
							<p>
								{sortDataMisc(
									review,
									"reviewer.liked_products",
									1,
									"value"
								)
									.slice(0, 5)
									.map((product, qty) => {
										return (
											<button
												className="likedProducts"
												key={product[0]}
											>
												{product[0]}
											</button>
										);
									})}
							</p>
						</Col>
					</Row>
				</div>

				<div className="expandToggler">
					{/* {review.reviewer.liked_products.slice(3)} */}
					{/* <a href="#" id="hideIt" className="hideIt"> */}
					<img
						onClick={expandToggleHandler}
						className={expandState ? "arrowUp" : "arrowDown"}
						src={expandState ? UpArrow : DownArrow}
						alt={
							expandState
								? "Arrow Up- Click to collapse"
								: "Arrow Down- Click to expand"
						}
					/>
					{/* </a> */}
					{/* <a href="#showIt" id="showIt" className="showIt">
						<img
							className="arrowUp"
							src={UpArrow}
							alt="Arrow Up- Click to collapse"
						/>
					</a> */}
				</div>
			</Card>
		</div>
	);
};

export default ReviewCard;
