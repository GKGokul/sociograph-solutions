import React from "react";
import DarkMode from "../static/light-mode.png";
const Navbar = ({ toggleDarkTheme, settoggleDarkTheme }) => {
	const toggleTheme = () => {
		console.log("clicked", toggleDarkTheme);
		settoggleDarkTheme(!toggleDarkTheme);
	};

	return (
		<div className={"NavBar" + (toggleDarkTheme ? " dark-mode" : "")}>
			<div>
				<img
					style={{ background: "white" }}
					src={DarkMode}
					alt="Light/Dark Mode"
					onClick={toggleTheme}
				/>
			</div>
			<h2>Review Reader</h2>
			{/* <span> */}
			{/* </span> */}
		</div>
	);
};

export default Navbar;
