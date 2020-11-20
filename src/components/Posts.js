import React, { forwardRef } from "react";
import "../styles/Posts.css";
import Avatar from "@material-ui/core/Avatar";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Posts = forwardRef(
	({ src, username, handle, time, tweet, image }, ref) => {
		return (
			<div ref={ref} className="posts">
				<div className="posts__expandIcon">
					<ExpandMoreIcon />
				</div>
				<div className="posts__avatar">
					<Avatar src={src} alt="" />
				</div>

				<div className="posts__details">
					<div className="posts__detailsTop">
						<p>
							<strong>{username}</strong>
						</p>
						<p className="handle">{handle} ·</p>
						<p className="posts__detailsTime">
							{time?.toDate().toLocaleTimeString()}
						</p>
					</div>
					<div className="posts__detailsMiddle">
						<p>{tweet}</p>
					</div>
					{image && <img className="posts__image" src={image} alt="" />}

					<div className="posts__detailsBottom">
						<div className="posts__icons replies">
							<ChatBubbleOutlineIcon />
							<p>102</p>
						</div>
						<div className="posts__icons retweet">
							<RepeatIcon />
							<p>567</p>
						</div>
						<div className="posts__icons like">
							<FavoriteBorderIcon />
							<p>500k</p>
						</div>
						<div className="posts__icons">
							<ShareIcon />
						</div>
					</div>
				</div>
			</div>
		);
	}
);

export default Posts;
