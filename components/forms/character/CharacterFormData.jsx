import { useEffect, useState } from 'react';
import { Client, Databases } from 'appwrite';

const projectID = import.meta.env.VITE_PROJECT_ID;
const databaseID = import.meta.env.VITE_DATABASE_ID;
const collectionID = import.meta.env.VITE_COLLECTION_ID;

const CharacterFormData = (characterID) => {
	const [characterFormData, setCharacterFormData] = useState([]);

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
			setCharacterFormData(res);
		}),
			(err) => {
				console.log(`error:${err}, id:${err.id}`);
				throw err;
			};
	}, []);

	return characterFormData;
};

export default CharacterFormData;
