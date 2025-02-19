import { useEffect, useState } from 'react';
import { Client, Databases } from 'appwrite';

const CharacterFormData = (characterID) => {
	// const { characterID } = useParams();

	const characterFormData = useGetCharacter(characterID);

	const characterData = {
		$id: characterID,
		name: characterFormData['character-name'],
		class: characterFormData.class,
		level: characterFormData.level,
		background: characterFormData.background,
		race: characterFormData.race,
		alignment: characterFormData.alignment,
		XP: characterFormData.XP,
		strength: characterFormData['ability-score-strength'],
		dexterity: characterFormData['ability-score-dexterity'],
		constitution: characterFormData['ability-score-constitution'],
		intelligence: characterFormData['ability-score-intelligence'],
		wisdom: characterFormData['ability-score-wisdom'],
		charisma: characterFormData['ability-score-charisma'],
	};

	return characterFormData;
};

export default CharacterFormData;
