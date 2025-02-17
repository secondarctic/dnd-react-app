import appwriteAPI from '../../lib/appwriteAPI';

export const callDatabase = async () => {
	const { databases, databaseID, collectionID } = appwriteAPI();
	try {
		const response = databases.listDocuments(
			databaseID,
			collectionID,
			[] // queries (optional)
		);
		// console.log(response);
		return response;
	} catch (err) {
		console.log(`error:${err}, id:${err.id}`);
		throw err;
	}
};

// setCharacterInfo(res.documents);
