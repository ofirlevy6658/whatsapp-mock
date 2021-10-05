import React, { useEffect, useState } from "react";
import "./topBar.scss";
import { User } from "../../types";

interface Props {
	user: User;
	chat?: User;
}

const TopBar = ({ user, chat }: Props) => {
	return (
		<div className="top-bar">
			<div className="left-side">
				<img className="profile-img" src={user.img} alt="profile-img" />
				<div className="icon-container">
					<img
						src="https://img.icons8.com/windows/32/000000/chat-messages--v1.png"
						alt="messages"
					/>
					<img
						src="https://cdn2.iconfinder.com/data/icons/50-material-design-round-corner-style/44/Submenu_2-512.png"
						alt="setting"
					/>
				</div>
			</div>
			<div className="right-side">
				{chat ? (
					<div>
						<img className="profile-img" src={chat.img} alt="profile-img" />
						<span>{chat.name}</span>
					</div>
				) : (
					<div></div>
				)}
				<div className="icon-container">
					<img
						src="https://img.icons8.com/ios-glyphs/30/000000/attach.png"
						alt="messages"
					/>
					<img
						src="https://cdn2.iconfinder.com/data/icons/50-material-design-round-corner-style/44/Submenu_2-512.png"
						alt="setting"
					/>
				</div>
			</div>
		</div>
	);
};
export default TopBar;
