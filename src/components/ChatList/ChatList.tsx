import React, { useState } from "react";
import "./chatList.scss";
import { ContactList } from "../../types";

interface Props {
	contactList: ContactList[];
	selectedChat: (chatId: string) => void;
}

const ChatList = ({ contactList, selectedChat }: Props) => {
	const [isSelected, setIsSelected] = useState(false);
	const [searchValue, setSearchValue] = useState("");

	const renderContactList = contactList.map((contact) => {
		if (!contact.name.toLowerCase().startsWith(searchValue.toLowerCase()))
			return;

		return (
			<div
				// style={{ backgroundColor: isSelected ? "grey" : "white" }}
				key={contact.id}
				className={isSelected ? "contact-card color" : "contact-card"}
				onClick={() => {
					setIsSelected(!isSelected);
					selectedChat(contact.id);
				}}
			>
				<div className="left">
					<img src={contact.img} alt="contact-img" />
					<div className="contact-details">
						<span>{contact.name}</span>
						<span>hi its me</span>
					</div>
				</div>
				<div className="right">
					<span>{contact.lastMessage}</span>
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
