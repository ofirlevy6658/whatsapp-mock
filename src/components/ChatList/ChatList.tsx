import React from "react";
import "./chatList.scss";
import { ContactList } from "../../types";

interface Props {
	contactList: ContactList[];
}

const ChatList = ({ contactList }: Props) => {
	const renderContactList = contactList.map((contact) => {
		return (
			<div id={contact.id} className="contact-card">
				<div className="left">
					<img src={contact.img} alt="contact-img" />
					<div className="contact-details">
						<span>{contact.name}</span>
						<span>hi its me</span>
					</div>
				</div>
				<div className="right">
					<span>20:22</span>
				</div>
			</div>
		);
	});

	return (
		<div className="chat-container">
			<input
				className="search-bar"
				placeholder="Search or start new chat"
				type="text"
			/>
			{renderContactList}
		</div>
	);
};

export default ChatList;
