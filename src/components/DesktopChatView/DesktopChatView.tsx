import React from "react";
import TopBar from "../TopBar/TopBar";
import ChatList from "../ChatList/ChatList";
import Chat from "../Chat/Chat";

import "./desktopChatView.scss";

interface Props {
	user: any;
	selectedChat: any;
	contactList: any;
	selectedChatHandle: any;
	messages: any;
	chatId: any;
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
