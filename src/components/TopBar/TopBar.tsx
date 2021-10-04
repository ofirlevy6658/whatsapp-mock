import React from "react";
import "./topBar.scss";
import { User, ContactList } from "../../types";

interface Props {
	user: User;
	contactList: ContactList[];
}

const TopBar = ({ user, contactList }: Props) => {
	return (
		<div className="top-bar">
			<div className="left-side">
				<img className="profile-img" src={user.img} alt="profile-img" />
			</div>
			<div className="right-side"></div>
		</div>
	);
};
export default TopBar;
