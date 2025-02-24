import { useEffect, useState } from 'react';
import { Client, Databases } from 'appwrite';

const projectID = import.meta.env.VITE_PROJECT_ID;
const databaseID = import.meta.env.VITE_DATABASE_ID;
const collectionID = import.meta.env.VITE_COLLECTION_ID;

const useGetCharacter = (characterID) => {
	const [characterData, setCharacterData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
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
			setIsLoading(false);
		}),
			(err) => {
				console.log(`error:${err}, id:${err.id}`);
				throw err;
			};
	}, []);

	const characterFormData = {
		$id: characterID,
		name: characterData['character-name'],
		class: characterData.class,
		level: characterData.level,
		background: characterData.background,
		race: characterData.race,
		alignment: characterData.alignment,
		xp: characterData.xp,
		strength: characterData.strength,
		dexterity: characterData.dexterity,
		constitution: characterData.constitution,
		intelligence: characterData.intelligence,
		wisdom: characterData.wisdom,
		charisma: characterData.charisma,
		['strength save proficiency']: characterData['strength-save-proficiency'],
		['dexterity save proficiency']: characterData['dexterity-save-proficiency'],
		['constitution save proficiency']:
			characterData['constitution-save-proficiency'],
		['intelligence save proficiency']:
			characterData['intelligence-save-proficiency'],
		['wisdom save proficiency']: characterData['wisdom-save-proficiency'],
		['charisma save proficiency']: characterData['charisma-save-proficiency'],
	};
	return { characterFormData, isLoading };
};

export default useGetCharacter;
