import React from "react";
import "../styles/Search.css";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
	return (
		<div className="search">
			<SearchIcon />
			<input type="text" placeholder="Search Twitter" />
		</div>
	);
}

export default Search;
