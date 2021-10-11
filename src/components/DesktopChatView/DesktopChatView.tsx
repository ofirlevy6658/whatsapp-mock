import React from "react";
import TopBar from "../TopBar/TopBar";
import ChatList from "../ChatList/ChatList";
import Chat from "../Chat/Chat";
import { User, ContactList, Messages } from "../../types";

import "./desktopChatView.scss";

interface Props {
	user: User | undefined;
	selectedChat: any;
	contactList: ContactList[] | undefined;
	selectedChatHandle: (id: string) => void;
	messages: Messages | undefined;
	chatId: string;
}

const DesktopChatView = ({
	user,
	selectedChat,
	contactList,
	selectedChatHandle,
	chatId,
	messages,
}: Props) => {
	return (
		<div className="desktop-chat-view-container">
			<div className="top-bar-grid">
				{user && <TopBar user={user} chat={selectedChat} />}
			</div>
			<div className="chat-list-grid">
				{contactList && (
					<ChatList
						contactList={contactList}
						selectedChat={selectedChatHandle}
					/>
				)}
			</div>
			<div className="chat-grid">
				{messages && <Chat messages={messages} chatId={chatId} />}
			</div>
		</div>
	);
};

export default DesktopChatView;
