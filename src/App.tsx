import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar/TopBar";
import ChatList from "./components/ChatList/ChatList";
import Chat from "./components/Chat/Chat";
import MobileChatList from "./components/MobileChat/MobileChatList";
import { User, ContactList, Messages } from "./types";
import { mockUser, mockContactList, mockMessages } from "./mockData";

import "./App.scss";
import "./reset.scss";

// CR: use a seperate container component for the page (eg. MessagesPage), do not put logic in App.tsx. It should be used only for bootstrapping
function App() {
	const [width, setWidth] = useState(window.innerWidth);
	const [user, setUser] = useState<User | undefined>(undefined);
	const [contactList, setContactList] = useState<ContactList[] | undefined>(
		undefined
	);
	const [selectedChat, setSelectedChat] = useState<User | undefined>(undefined);
	const [messages, setMessages] = useState<Messages | undefined>(undefined);
	const [selectedChatId, setSelectedChatId] = useState("");

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
	
	// CR: do not hardcode numbers, use CONST
	if (width > 500) {
		// CR: extract this JSX to a seperate component called "DesktopChatView"
		return (
			<div className="container">
				{user && contactList && <TopBar user={user} chat={selectedChat} />}
				<div className="chat-list-page">
					{contactList && (
						<ChatList
							contactList={contactList}
							selectedChat={selectedChatHandle}
						/>
					)}
				</div>
				<div className="chat-page">
					{messages && <Chat messages={messages} chatId={selectedChatId} />}
				</div>
			</div>
		);
	} else {
		// CR: extract this JSX to a seperate component called "MobileChatView"
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
}
export default App;
