import React from "react";
import "../styles/WhoToFollow.css";
import FollowCard from "./FollowCard";

function WhoToFollow() {
	return (
		<div className="whoToFollow">
			<div className="whoToFollow__top">
				<h4>Who to follow</h4>
			</div>
			<FollowCard
				image="https://pbs.twimg.com/profile_images/1010862750401253377/Rof4XuYC.jpg"
				username="LeBron James"
				handle="@KingJames"
			/>
			<FollowCard
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJoB6NZ_0Lh1oV6LXj7VcuzsVFsu63eit6bw&usqp=CAU"
				username="Seo Ye Ji"
				handle="@seoyejiintl"
			/>
			<div className="whoToFollow__bottom">
				<h4>Show more</h4>
			</div>
		</div>
	);
}

export default WhoToFollow;
