import { useEffect, useState } from 'react';
import { Client, Databases, ID } from 'appwrite';
const projectID = import.meta.env.VITE_PROJECT_ID;
const databaseID = import.meta.env.VITE_DATABASE_ID;
const collectionID = import.meta.env.VITE_COLLECTION_ID;

const updateCharacter = (characterID, data) => {
	const client = new Client();
	client.setProject(projectID);

	const databases = new Databases(client);

	return <div></div>;
};

export default updateCharacter;
