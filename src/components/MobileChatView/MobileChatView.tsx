import React from "react";
import Chat from "../../components/Chat/Chat";
import MobileChatList from "../../components/MobileChat/MobileChatList";
import { ContactList, Messages } from "../../types";

import "./MobileChatView.scss";

interface Props {
	contactList: ContactList[] | undefined;
	messages: Messages | undefined;
	selectedChatHandle: (chatId: string) => void;
	selectedChat: boolean;
	selectedChatId: string;
	backToMobileChat: () => void;
}

export const MobileChatView = ({
	selectedChat,
	contactList,
	selectedChatHandle,
	messages,
	selectedChatId,
	backToMobileChat,
}: Props) => {
	return (
		<div className="mobile-chat-view-container">
			{!selectedChat && contactList && (
				<MobileChatList
					contactList={contactList}
					selectedChat={selectedChatHandle}
				/>
			)}
			{selectedChat && messages && (
				<Chat
					enableBackBtn
					messages={messages}
					chatId={selectedChatId}
					backToMobileChat={backToMobileChat}
				/>
			)}
		</div>
	);
};

export default MobileChatView;
