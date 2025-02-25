import { useEffect, useState } from 'react';
import { Client, Databases, ID } from 'appwrite';
const projectID = import.meta.env.VITE_PROJECT_ID;
const databaseID = import.meta.env.VITE_DATABASE_ID;
const collectionID = import.meta.env.VITE_COLLECTION_ID;

const useCreateDBEntry = (value) => {
	const client = new Client();
	client.setProject(projectID);

	const databases = new Databases(client);

	if (!value) {
		alert('Please enter a character name to continue.');
	} else {
		let character = databases.createDocument(
			databaseID,
			collectionID,
			ID.unique(),
			{
				'character-name': value,
			}
		);

		character.then(
			(res) => {
				console.log(res);
				window.location.reload();
			},
			(err) => {
				console.log(`error:${err}, id:${err.id}`);
			}
		);
	}
	return;
};

export default useCreateDBEntry;
