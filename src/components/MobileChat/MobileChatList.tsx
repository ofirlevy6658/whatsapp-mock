import React from "react";
import { ContactList } from "../../types";
import "./MobileChatList.scss";
interface Props {
	contactList: ContactList[];
	selectedChat: (chatId: string) => void;
}

const MobileChatList = ({ contactList, selectedChat }: Props) => {
	const renderContactList = contactList.map((contact) => {
		return (
			<div
				key={contact.id}
				className="contact-card"
				onClick={() => {
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
		<div className="mobile-chat-container">
			<div className="nav-bar">
				<div className="header">
					<h3 className="title">WhatsApp</h3>
					<div>
						<img
							src="https://img.icons8.com/ios/50/000000/search--v1.png"
							alt="search"
						/>
						<img
							src="https://img.icons8.com/windows/32/000000/chat-messages--v2.png"
							alt="messages"
						/>
						<img
							src="https://cdn2.iconfinder.com/data/icons/50-material-design-round-corner-style/44/Submenu_2-512.png"
							alt="setting"
						/>
					</div>
				</div>
				<div className="sections">
					<span>CALLS</span>
					<span className="chats">CHATS</span>
					<span>CONTACTS</span>
				</div>
			</div>
			<div className="chat-list-container">{renderContactList}</div>
		</div>
	);
};

export default MobileChatList;
