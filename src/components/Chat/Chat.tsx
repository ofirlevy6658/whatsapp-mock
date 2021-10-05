import React from "react";
import { Messages } from "../../types";

import "./chat.scss";

interface Props {
	messages: Messages;
	chatId: string;
	backToMobileChat?: () => void;
	enableBackBtn?: boolean;
}

const Chat = ({
	messages,
	chatId,
	backToMobileChat,
	enableBackBtn = false,
}: Props) => {
	const renderChat = messages[chatId]?.msgArr.map((msg, i) => {
		if (msg.type === "received")
			return (
				<div key={i} className="received msg">
					<span>{msg.context}</span>
					<span className="sent-time">{msg.time}</span>
				</div>
			);
		if (msg.type === "sent")
			return (
				<div key={i} className="sent msg">
					<span>{msg.context}</span>
					<span className="sent-time">{msg.time}</span>
					<img
						className="seen"
						src="https://img.icons8.com/color/48/000000/double-tick.png"
						alt="seen"
					/>
				</div>
			);
		else return <div></div>;
	});

	return (
		<>
			<div className="chat-container">
				{enableBackBtn && (
					<img
						className="back"
						src="https://img.icons8.com/ios-filled/50/000000/back.png"
						alt="back to chats"
						onClick={backToMobileChat}
					/>
				)}
				<span className="start-date-chat">
					{messages[chatId]?.startChatDate}
				</span>
				{renderChat}
			</div>
			<div className="chat-input-bar">
				<img
					className="icon"
					src="https://img.icons8.com/external-tulpahn-basic-outline-tulpahn/48/000000/external-emoji-birthday-party-tulpahn-basic-outline-tulpahn.png"
					alt="record"
				/>
				<input type="text" />
				<img
					className="icon"
					src="https://img.icons8.com/material-rounded/24/000000/microphone.png"
					alt="record"
				/>
			</div>
		</>
	);
};
export default Chat;
