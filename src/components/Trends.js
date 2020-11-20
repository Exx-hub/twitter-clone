import React from "react";
import "../styles/Trends.css";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import Trend from "./Trend";

function Trends() {
	return (
		<div className="trends">
			<div className="trends__top">
				<h4>Trends for you</h4>
				<SettingsOutlinedIcon />
			</div>
			<Trend
				title="Trending in the Philippines"
				headline="#BoycottLizaSoberano"
				tweetCount="3,097 tweets"
			/>
			<Trend
				title="Trending in the Philippines"
				headline="iPhone 8"
				tweetCount="25.9k tweets"
			/>
			<Trend title="KPop·Trending " headline="Lisa" tweetCount="561k Tweets" />
			<Trend title="Trending in the Philippines" headline="Dolomote Gold" />
			<div className="trends__bottom">
				<h4>Show more</h4>
			</div>
		</div>
	);
}

export default Trends;
