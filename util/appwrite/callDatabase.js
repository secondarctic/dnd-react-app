// import { appwriteAPI } from '../../lib/appwriteAPI';
import { appwriteAPI } from '../../lib/appwriteAPI';

export const callDatabase = () => {
	const { databases, databaseID, collectionID } = appwriteAPI();

	let promise = databases.listDocuments(
		databaseID,
		collectionID,
		[] // queries (optional)
	);

	promise.then((res) => {
		return { res };
	}),
		(err) => {
			console.log(`error:${err}, id:${err.id}`);
			throw err;
		};
};
