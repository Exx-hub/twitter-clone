import React from "react";
import "../styles/Widgets.css";
import Footer from "./Footer";
import Search from "./Search";
import Trends from "./Trends";
import WhoToFollow from "./WhoToFollow";

function Widgets() {
	return (
		<div className="widgets">
			<Search />
			<Trends />
			<WhoToFollow />
			<Footer />
		</div>
	);
}

export default Widgets;
