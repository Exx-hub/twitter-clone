import React from "react";
import "../styles/Sidebar.css";

import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOptions from "./SidebarOptions";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreOutlinedIcon from "@material-ui/icons/MoreOutlined";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<TwitterIcon className="sidebar__icon" />
				<SidebarOptions title="Home" Icon={HomeIcon} active />
				<SidebarOptions title="Explore" Icon={SearchIcon} />
				<SidebarOptions title="Notifications" Icon={NotificationsNoneIcon} />
				<SidebarOptions title="Messages" Icon={MailOutlineIcon} />
				<SidebarOptions title="Bookmarks" Icon={BookmarkBorderIcon} />
				<SidebarOptions title="Lists" Icon={ListAltIcon} />
				<SidebarOptions title="Profile" Icon={PersonOutlineIcon} />
				<SidebarOptions title="More" Icon={MoreOutlinedIcon} />
				<Button className="sidebar__topBigButton" variant="contained">
					Tweet
				</Button>

				<CreateOutlinedIcon className="sidebar__topSmallButton" />
			</div>
			<div className="sidebar__bottom">
				<Avatar
					src="https://lh3.googleusercontent.com/ogw/ADGmqu-zl-xN_8_RyXLBiaQnWLQO0Zww7g5hxoA1pF48=s32-c-mo"
					alt=""
				/>
				<div className="sidebar__bottomRight">
					<h4>alvin flores acosta</h4>
					<p>@alvinlokalsoul</p>
				</div>

				<ExpandMoreIcon />
			</div>
		</div>
	);
}

export default Sidebar;
