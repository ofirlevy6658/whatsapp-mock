export interface User {
	id: string;
	name: string;
	img: string;
}

export interface ContactList {
	id: string;
	name: string;
	img: string;
	lastMessage: string;
	lastMessageTime: string;
}

// CR: use TS enums instead of raw strings
type MsgStatus = "received" | "sent";

export interface Messages {
	[key: string]: {
		startChatDate: string;
		msgArr: {
			context: string;
			time: string;
			type: MsgStatus;
		}[];
	};
}
