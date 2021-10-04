import { User, ContactList, Messages } from "./types";

export const mockUser: User = {
	id: "dsad21d",
	name: "Yossi",
	img: "https://www.w3schools.com/howto/img_avatar2.png",
};

export const mockContactList: ContactList[] = [
	{
		id: "d21dsd12f",
		name: "Paul",
		img: "https://www.w3schools.com/howto/img_avatar2.png",
		lastMessage: "16:32",
	},
	{
		id: "dasrafdwc",
		name: "Liam",
		img: "https://www.w3schools.com/howto/img_avatar2.png",
		lastMessage: "Friday",
	},
	{
		id: "dsad21dwqd",
		name: "Jim",
		img: "https://www.w3schools.com/howto/img_avatar2.png",
		lastMessage: "Monday",
	},
	{
		id: "dsad2dsa1d",
		name: "Anthony ",
		img: "https://www.w3schools.com/howto/img_avatar2.png",
		lastMessage: "Yesterday",
	},
	{
		id: "kdsad3w",
		name: "Kurt ",
		img: "https://www.w3schools.com/howto/img_avatar2.png",
		lastMessage: "08:42",
	},
];

export const mockMessages: Messages = {
	kdsad3w: {
		firstMessage: "22 JANUARY 2015",
		msgArr: [
			{
				context: "bye",
				time: "02:00",
				type: "received",
			},
			{
				context: "are u ok",
				time: "06:00",
				type: "received",
			},
			{
				context: "sry",
				time: "06:42",
				type: "received",
			},
			{
				context: "lol",
				time: "06:42",
				type: "received",
			},
		],
	},

	dsad2dsa1d: {
		firstMessage: "22 JANUARY 2015",
		msgArr: [
			{
				context: "hi bro",
				time: "02:00",
				type: "received",
			},
			{
				context: "im ok",
				time: "06:00",
				type: "sent",
			},
			{
				context: "sry",
				time: "06:42",
				type: "received",
			},
			{
				context: "ok i need to go",
				time: "06:42",
				type: "received",
			},
		],
	},
	dsad21dwqd: {
		firstMessage: "22 JANUARY 2015",
		msgArr: [
			{
				context: "are u there?",
				time: "02:00",
				type: "sent",
			},
			{
				context: "hi??",
				time: "06:00",
				type: "sent",
			},
			{
				context: "hello??",
				time: "06:42",
				type: "sent",
			},
			{
				context: "no",
				time: "06:42",
				type: "received",
			},
		],
	},
	dasrafdwc: {
		firstMessage: "22 JANUARY 2015",
		msgArr: [
			{
				context: "hey",
				time: "02:00",
				type: "received",
			},
			{
				context: "hi",
				time: "06:00",
				type: "sent",
			},
			{
				context: "ok",
				time: "06:42",
				type: "received",
			},
			{
				context: "talk later bye",
				time: "06:42",
				type: "received",
			},
		],
	},
	d21dsd12f: {
		firstMessage: "22 JANUARY 2015",
		msgArr: [
			{
				context: "hello",
				time: "02:00",
				type: "sent",
			},
			{
				context: "how are u?",
				time: "06:00",
				type: "sent",
			},
			{
				context: "im fine ",
				time: "06:42",
				type: "received",
			},
			{
				context: "ok i need to go",
				time: "06:42",
				type: "received",
			},
		],
	},
};
