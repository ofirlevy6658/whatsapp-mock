import React, { useEffect, useState } from "react";
import DesktopChatView from "../components/DesktopChatView/DesktopChatView";
import MobileChatView from "../components/MobileChatView/MobileChatView";
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
	const isMobile = width < 600;
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
	console.log(isMobile);
	if (!isMobile) {
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
				<MobileChatView
					selectedChat={!!selectedChat}
					contactList={contactList}
					selectedChatHandle={selectedChatHandle}
					messages={messages}
					selectedChatId={selectedChatId}
					backToMobileChat={backToMobileChat}
				/>
			</>
		);
	}
};
