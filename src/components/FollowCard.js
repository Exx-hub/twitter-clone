import React from "react";
import "../styles/FollowCard.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

function FollowCard({ image, username, handle }) {
	return (
		<div className="followCard">
			<div className="followCard__left">
				<Avatar src={image} />
				<div className="followCard__info">
					<div className="followCard__username">
						<h4>{username}</h4>
						<VerifiedUserIcon />
					</div>
					<div className="followCard__handle">
						<h5>{handle}</h5>
						<p>Follows you</p>
					</div>
				</div>
			</div>
			<Button>Follow</Button>
		</div>
	);
}

export default FollowCard;
