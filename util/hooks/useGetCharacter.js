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
		strengthSave: characterData['strength-save-proficiency'],
		dexteritySave: characterData['dexterity-save-proficiency'],
		constitutionSave: characterData['constitution-save-proficiency'],
		intelligenceSave: characterData['intelligence-save-proficiency'],
		wisdomSave: characterData['wisdom-save-proficiency'],
		charismaSave: characterData['charisma-save-proficiency'],
		acrobatics: characterData['skill-acrobatics'],
		animalHandling: characterData['skill-animal-handling'],
		arcana: characterData['skill-arcana'],
		athletics: characterData['skill-athletics'],
		deception: characterData['skill-deception'],
		history: characterData['skill-history'],
		insight: characterData['skill-insight'],
		intimidation: characterData['skill-intimidation'],
		investigation: characterData['skill-investigation'],
		medicine: characterData['skill-medicine'],
		nature: characterData['skill-nature'],
		perception: characterData['skill-perception'],
		performance: characterData['skill-performance'],
		persuasion: characterData['skill-persuasion'],
		religion: characterData['skill-religion'],
		sleightOfHand: characterData['skill-sleight-of-hand'],
		stealth: characterData['skill-stealth'],
		survival: characterData['skill-survival'],
	};
	return { characterFormData, isLoading };
};

export default useGetCharacter;
