import React from "react";

import Navbar from "./components/Navbar";
import IdSelector from "./components/IdSelector";
import ReviewContainer from "./components/ReviewContainer";

import "./styles/App.scss";

function App() {
	return (
		<div className="App">
			<Navbar />
			<IdSelector />
			<ReviewContainer />
		</div>
	);
}

export default App;
