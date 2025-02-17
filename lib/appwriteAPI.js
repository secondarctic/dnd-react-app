import { Client, Databases } from 'appwrite';
const projectID = import.meta.env.VITE_PROJECT_ID;
const databaseID = import.meta.env.VITE_DATABASE_ID;
const collectionID = import.meta.env.VITE_COLLECTION_ID;

const appwriteAPI = async () => {
	try {
		const client = new Client()
			.setEndpoint('https://cloud.appwrite.io/v1')
			.setProject(projectID);

		const databases = new Databases(client);

		return [databases, databaseID, collectionID];
	} catch (err) {
		console.log(`error:${err}, id:${err.id}`);
		throw err;
	}
};

export default appwriteAPI;
