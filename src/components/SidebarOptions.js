import React from "react";
import "../styles/SidebarOptions.css";

function SidebarOptions({ Icon, title, active }) {
	return (
		<div
			className={
				active ? "sidebarOptions sidebarOptions--active" : "sidebarOptions"
			}
		>
			<Icon />
			<h4>{title}</h4>
		</div>
	);
}

export default SidebarOptions;
