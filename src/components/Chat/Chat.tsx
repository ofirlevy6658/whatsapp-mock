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
				<div key={i} className="received-msg">
					<span>{msg.context}</span>
					<span>{msg.time}</span>
				</div>
			);
		if (msg.type === "sent")
			return (
				<div key={i} className="sent-msg">
					<span>{msg.context}</span>
					<span>{msg.time}</span>
				</div>
			);
	});

	return (
		<div className="chat-container">
			<h1>{renderChat}</h1>
		</div>
	);
};
export default Chat;
