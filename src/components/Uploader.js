import React, { useState } from "react";
import "../styles/Uploader.css";

import Avatar from "@material-ui/core/Avatar";

import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import GifIcon from "@material-ui/icons/Gif";
import PollOutlinedIcon from "@material-ui/icons/PollOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";

import Button from "@material-ui/core/Button";
import db from "../firebase";
import firebase from "firebase/app";

function Uploader() {
	const [tweetInput, setTweetInput] = useState("");
	const [imageInput, setImageInput] = useState("");

	const handleTweet = () => {
		db.collection("posts").add({
			src:
				"https://lh3.googleusercontent.com/ogw/ADGmqu-zl-xN_8_RyXLBiaQnWLQO0Zww7g5hxoA1pF48=s32-c-mo",
			username: "alvin flores acosta",
			handle: "@alvinlokalsoul",
			time: firebase.firestore.FieldValue.serverTimestamp(),
			tweet: tweetInput,
			image: imageInput,
		});

		setTweetInput("");
		setImageInput("");
	};
	return (
		<div className="uploader">
			<div className="uploader__top">
				<Avatar
					src="https://lh3.googleusercontent.com/ogw/ADGmqu-zl-xN_8_RyXLBiaQnWLQO0Zww7g5hxoA1pF48=s32-c-mo"
					alt=""
				/>
				<input
					className="tweetInput"
					type="text"
					placeholder="What's happening?"
					value={tweetInput}
					onChange={(e) => setTweetInput(e.target.value)}
				/>
				<input
					className="imageInput"
					type="text"
					placeholder="image URL(optional)"
					value={imageInput}
					onChange={(e) => setImageInput(e.target.value)}
				/>
			</div>
			<div className="uploader__bottom">
				<div className="uploader__icons">
					<ImageOutlinedIcon />
					<GifIcon />
					<PollOutlinedIcon />
					<SentimentSatisfiedOutlinedIcon />
					<CalendarTodayOutlinedIcon />
				</div>
				<Button disabled={!tweetInput} onClick={handleTweet}>
					Tweet
				</Button>
			</div>
		</div>
	);
}

export default Uploader;
