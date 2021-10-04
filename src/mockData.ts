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
	},
	{
		id: "dasrafdwc",
		name: "Liam",
		img: "https://www.w3schools.com/howto/img_avatar2.png",
	},
	{
		id: "dsad21dwqd",
		name: "Jim",
		img: "https://www.w3schools.com/howto/img_avatar2.png",
	},
	{
		id: "dsad2dsa1d",
		name: "Anthony ",
		img: "https://www.w3schools.com/howto/img_avatar2.png",
	},
	{
		id: "kdsad3w",
		name: "Kurt ",
		img: "https://www.w3schools.com/howto/img_avatar2.png",
	},
];

export const messages: Messages = {
	kdsad3w: {
		firstMessage: "22 JANUARY 2015",
		lastMessage: "Yesterday",
		incomeMsg: [
			{
				context: "hi bro",
				time: "02:00",
				seen: true,
			},
			{
				context: "im ok",
				time: "06:00",
				seen: true,
			},
			{
				context: "ok i need to go",
				time: "06:42",
				seen: true,
			},
		],
		outputMsg: [
			{
				context: "hi how are u?",
				time: "02:32",
				seen: true,
			},
			{
				context: "good to hear",
				time: "06:12",
				seen: true,
			},
			{
				context: "bye",
				time: "08:42",
				seen: true,
			},
		],
	},

	dsad2dsa1d: {
		firstMessage: "22 JANUARY 2015",
		lastMessage: "Yesterday",
		incomeMsg: [
			{
				context: "hi bro",
				time: "02:00",
				seen: true,
			},
			{
				context: "im ok",
				time: "06:00",
				seen: true,
			},
			{
				context: "ok i need to go",
				time: "06:42",
				seen: true,
			},
		],
		outputMsg: [
			{
				context: "hi how are u?",
				time: "02:32",
				seen: true,
			},
			{
				context: "good to hear",
				time: "06:12",
				seen: true,
			},
			{
				context: "bye",
				time: "08:42",
				seen: true,
			},
		],
	},
	dsad21dwqd: {
		firstMessage: "22 JANUARY 2015",
		lastMessage: "Yesterday",
		incomeMsg: [
			{
				context: "hi bro",
				time: "02:00",
				seen: true,
			},
			{
				context: "im ok",
				time: "06:00",
				seen: true,
			},
			{
				context: "ok i need to go",
				time: "06:42",
				seen: true,
			},
		],
		outputMsg: [
			{
				context: "hi how are u?",
				time: "02:32",
				seen: true,
			},
			{
				context: "good to hear",
				time: "06:12",
				seen: true,
			},
			{
				context: "bye",
				time: "08:42",
				seen: true,
			},
		],
	},
};
