import React, { useEffect, useState } from "react";
import "./App.scss";
import TopBar from "./components/TopBar/TopBar";
import ChatList from "./components/ChatList/ChatList";
import Chat from "./components/Chat/Chat";
import { User, ContactList, Messages } from "./types";
import { mockUser, mockContactList, mockMessages } from "./mockData";

import "./reset.scss";

function App() {
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
	}, []);

	const selectedChatHandle = (chatId: string) => {
		setSelectedChatId(chatId);
		const findSelectedChat = contactList?.find(
			(contact) => contact.id === chatId
		);
		setSelectedChat(findSelectedChat);
	};

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
}

export default App;
