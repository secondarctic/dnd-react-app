import { useEffect, useState } from 'react';
import { Client, Databases } from 'appwrite';
import { callDatabase } from '../appwrite/callDatabase.js';
import { appwriteAPI } from '../../lib/appwriteAPI.js';

const projectID = import.meta.env.VITE_PROJECT_ID;
const databaseID = import.meta.env.VITE_DATABASE_ID;
const collectionID = import.meta.env.VITE_COLLECTION_ID;

const useReadDB = () => {
	const [characterInfo, setCharacterInfo] = useState([]);

	const client = new Client();
	client.setProject(projectID);

	const databases = new Databases(client);

	useEffect(() => {
		let result = databases.listDocuments(
			databaseID,
			collectionID,
			[] // queries (optional)
		);

		result.then((res) => {
			setCharacterInfo(res.documents);
		}),
			(err) => {
				console.log(`error:${err}, id:${err.id}`);
			};
	}, []);

	return [characterInfo];
};

export default useReadDB;
