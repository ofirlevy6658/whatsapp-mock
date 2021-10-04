export interface User {
	id: string;
	name: string;
	img: string;
}

export interface ContactList {
	id: string;
	name: string;
	img: string;
}

export interface Messages {
	[key: string]: {
		firstMessage: string;
		lastMessage: string;
		incomeMsg: {
			context: string;
			time: string;
			seen: true;
		}[];
		outputMsg: {
			context: string;
			time: string;
			seen: true;
		}[];
	};
}
