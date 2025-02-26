import { Client, Databases } from 'appwrite';
const projectID = import.meta.env.VITE_PROJECT_ID;
const databaseID = import.meta.env.VITE_DATABASE_ID;
const collectionID = import.meta.env.VITE_COLLECTION_ID;

const updateCharacter = (characterID, updates) => {
	const documentID = characterID;

	const client = new Client();
	client.setProject(projectID);

	const databases = new Databases(client);

	let update = databases.updateDocument(databaseID, collectionID, documentID, {
		...updates,
	});

	update.then(
		(data) => {
			console.log(data);
			window.location.reload();
		},
		(err) => {
			console.log(`error:${err}, id:${err.id}`);
		}
	);

	return;
};

export default updateCharacter;
