import { useEffect, useState } from 'react';
import { Client, Databases } from 'appwrite';
import { callDatabase } from '../appwrite/callDatabase.js';
import { appwriteAPI } from '../../lib/appwriteAPI.js';

const projectID = import.meta.env.VITE_PROJECT_ID;
const databaseID = import.meta.env.VITE_DATABASE_ID;
const collectionID = import.meta.env.VITE_COLLECTION_ID;

const useGetCharacter = (characterID) => {
	const [characterData, setCharacterData] = useState([]);

	const documentID = characterID;

	const client = new Client();
	client.setProject(projectID);

	const databases = new Databases(client);

	useEffect(() => {
		let result = databases.getDocument(
			databaseID,
			collectionID,
			documentID,
			[] // queries (optional) Query.equal('$id', [`${characterID}`])
		);

		result.then((res) => {
			setCharacterData(res);
		}),
			(err) => {
				console.log(`error:${err}, id:${err.id}`);
				throw err;
			};
	}, []);

	return characterData;
};

export default useGetCharacter;
