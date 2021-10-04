import React from "react";
import { Messages } from "../../types";

import "./chat.scss";

interface Props {
	messages: Messages;
	chatId: string;
}

const Chat = ({ messages, chatId }: Props) => {
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
	});

	return (
		<>
			<div className="chat-container">
				<h2 className="start-date-chat">{messages[chatId]?.startChatDate}</h2>
				{renderChat}
			</div>
			<div className="chat-input-bar">
				<input type="text" />
			</div>
		</>
	);
};
export default Chat;
