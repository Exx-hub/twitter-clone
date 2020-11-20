import React, { useEffect, useState } from "react";
import "../styles/Feed.css";
import Header from "./Header";
import Posts from "./Posts";
import Uploader from "./Uploader";

import db from "../firebase.js";

import Flipmove from "react-flip-move";

function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection("posts")
			.orderBy("time", "desc")
			.onSnapshot((snapshot) => {
				setPosts(
					snapshot.docs.map((doc) => {
						return { id: doc.id, data: doc.data() };
					})
				);
			});
	}, []);

	return (
		<div className="feed">
			<Header />
			<Uploader />

			<Flipmove>
				{posts.map((post) => (
					<Posts
						key={post.id}
						src={post.data.src}
						username={post.data.username}
						handle={post.data.handle}
						time={post.data.time}
						tweet={post.data.tweet}
						image={post.data.image}
					/>
				))}
			</Flipmove>
		</div>
	);
}

export default Feed;
