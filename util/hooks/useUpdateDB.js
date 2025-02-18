import { useEffect, useState } from 'react';
import { Client, Databases } from 'appwrite';
// const projectID = import.meta.env.VITE_PROJECT_ID;
const databaseID = import.meta.env.VITE_DATABASE_ID;
const collectionID = import.meta.env.VITE_COLLECTION_ID;

const updateCharacter = (characterID, attr, str) => {
	const documentID = characterID;

	const [characterData, setCharacterData] = useState({});

	const client = new Client();
	// .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
	client.setProject(projectID);

	const databases = new Databases(client);

	useEffect(() => {
		let result = databases.updateDocument(
			databaseID,
			collectionID,
			documentID,
			{ [`${attr}`]: `${str}` } // data (optional)
		);
	}, []);

	return;
};

export default updateCharacter;
