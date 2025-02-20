import { Client, Databases } from 'appwrite';
const projectID = import.meta.env.VITE_PROJECT_ID;
const databaseID = import.meta.env.VITE_DATABASE_ID;
const collectionID = import.meta.env.VITE_COLLECTION_ID;

export const appwriteAPI = () => {
	const client = new Client()
		.setEndpoint('https://cloud.appwrite.io/v1')
		.setProject(projectID);
	const databases = new Databases(client);
	const appwriteInfo = {
		databases,
		databaseID,
		collectionID,
	};
	return appwriteInfo;
};
// export { ID } from appwriteAPI;
export default appwriteAPI;
