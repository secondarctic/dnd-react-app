import { useEffect, useState } from 'react';
import useGetCharacter from './useGetCharacter';
// import { Client, Databases } from 'appwrite';

const useCharacterFormData = (characterID) => {
	const [characterFormData, setCharacterFormData] = useState({});

	const characterData = useGetCharacter(characterID);
	setCharacterFormData(characterData);

	return [characterFormData];
};

export default useCharacterFormData;

// const characterData = await Promise.all({
// 	$id: characterID,
// 	name: characterFormData['character-name'],
// 	class: characterFormData.class,
// 	level: characterFormData.level,
// 	background: characterFormData.background,
// 	race: characterFormData.race,
// 	alignment: characterFormData.alignment,
// 	XP: characterFormData.XP,
// 	strength: characterFormData['ability-score-strength'],
// 	dexterity: characterFormData['ability-score-dexterity'],
// 	constitution: characterFormData['ability-score-constitution'],
// 	intelligence: characterFormData['ability-score-intelligence'],
// 	wisdom: characterFormData['ability-score-wisdom'],
// 	charisma: characterFormData['ability-score-charisma'],
// });

// async function getPrice() {
//   const [choice, prices] = await Promise.all([
//     promptForDishChoice(),
//     fetchPrices(),
//   ]);
//   return prices[choice];
// }
