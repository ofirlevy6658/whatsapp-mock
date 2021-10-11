import React, { useEffect, useState } from "react";
import Chat from "../components/Chat/Chat";
import MobileChatList from "../components/MobileChat/MobileChatList";
import DesktopChatView from "../components/DesktopChatView/DesktopChatView";
import { User, ContactList, Messages } from "../types";
import { mockUser, mockContactList, mockMessages } from "../mockData";

export const MessagesPage = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [user, setUser] = useState<User | undefined>(undefined);
	const [contactList, setContactList] = useState<ContactList[] | undefined>(
		undefined
	);
	const [selectedChat, setSelectedChat] = useState<User | undefined>(undefined);
	const [messages, setMessages] = useState<Messages | undefined>(undefined);
	const [selectedChatId, setSelectedChatId] = useState("");
	const mobileScreenSize = 500;
	useEffect(() => {
		setUser(mockUser);
		setContactList(mockContactList);
		setMessages(mockMessages);
		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

	const updateDimensions = () => setWidth(window.innerWidth);

	const selectedChatHandle = (chatId: string) => {
		setSelectedChatId(chatId);
		const findSelectedChat = contactList?.find(
			(contact) => contact.id === chatId
		);
		setSelectedChat(findSelectedChat);
	};
	const backToMobileChat = () => setSelectedChat(undefined);

	if (width > mobileScreenSize) {
		return (
			<>
				<DesktopChatView
					user={user}
					selectedChat={selectedChat}
					contactList={contactList}
					selectedChatHandle={selectedChatHandle}
					messages={messages}
					chatId={selectedChatId}
				/>
			</>
		);
	} else {
		return (
			<>
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
			</>
		);
	}
};
