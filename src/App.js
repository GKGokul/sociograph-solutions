import React, { useState } from "react";

import Navbar from "./components/Navbar";
import IdSelector from "./components/IdSelector";
import ReviewContainer from "./components/ReviewContainer";

import "./styles/App.scss";

function App() {
	const [productId, setproductId] = useState("1");
	const [viewerId, setviewerId] = useState("1");

	const [allReviewData, setallReviewData] = useState({ data: "" });

	return (
		<div className="App">
			<Navbar />
			<IdSelector
				productId={productId}
				setproductId={setproductId}
				viewerId={viewerId}
				setviewerId={setviewerId}
				allReviewData={allReviewData}
				setallReviewData={setallReviewData}
			/>
			<ReviewContainer allReviewData={allReviewData} />
		</div>
	);
}

export default App;
