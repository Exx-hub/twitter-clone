import { ExpandMore } from "@material-ui/icons";
import React from "react";
import "../styles/Trend.css";

function Trend({ title, headline, tweetCount }) {
	return (
		<div className="trend">
			<div className="trend__top">
				<h5>{title}</h5>
				<ExpandMore />
			</div>
			<h4>{headline}</h4>
			<p>{tweetCount}</p>
		</div>
	);
}

export default Trend;
