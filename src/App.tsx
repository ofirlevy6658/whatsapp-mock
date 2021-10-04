import React, { useEffect, useState } from "react";
import "./App.scss";
import TopBar from "./components/TopBar/TopBar";
import { User, ContactList } from "./types";
import { mockUser, mockContactList } from "./mockData";

import "./reset.scss";

function App() {
	const [user, setUser] = useState<User | undefined>(undefined);
	const [contactList, setContactList] = useState<ContactList[] | undefined>(
		undefined
	);

	useEffect(() => {
		setUser(mockUser);
		setContactList(mockContactList);
	}, []);

	return (
		<div className="container">
			{user && contactList && <TopBar user={user} contactList={contactList} />}
		</div>
	);
}

export default App;
