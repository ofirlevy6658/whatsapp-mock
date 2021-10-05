import React, { useState } from "react";
import "./chatList.scss";
import { ContactList } from "../../types";

interface Props {
	contactList: ContactList[];
	selectedChat: (chatId: string) => void;
}

const ChatList = ({ contactList, selectedChat }: Props) => {
	const [isSelected, setIsSelected] = useState("");
	const [searchValue, setSearchValue] = useState("");

	const renderContactList = contactList.map((contact) => {
		if (!contact.name.toLowerCase().startsWith(searchValue.toLowerCase()))
			return null;
		return (
			<div
				key={contact.id}
				className={
					isSelected === contact.id ? "contact-card selected" : "contact-card"
				}
				onClick={() => {
					setIsSelected(contact.id);
					selectedChat(contact.id);
				}}
			>
				<div className="left">
					<img src={contact.img} alt="contact-img" />
					<div className="contact-details">
						<span className="contact-name">{contact.name}</span>
						<span className="last-msg">{contact.lastMessage}</span>
					</div>
				</div>
				<div className="right">
					<span className="last-msg">{contact.lastMessageTime}</span>
				</div>
			</div>
		);
	});

	return (
		<div className="chat-list-container">
			<input
				className="search-bar"
				placeholder="Search or start new chat"
				type="text"
				value={searchValue}
				onChange={(e) => setSearchValue(e.currentTarget.value)}
			/>
			{renderContactList}
		</div>
	);
};

export default ChatList;
