import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailBlock from './character/DetailBlock';
import AbilityStatBlock from './character/AbilityStatBlock';
import CharacterUpdateForm from './forms/character/CharacterUpdateForm';
import useGetCharacter from '../util/hooks/useGetCharacter';

const Character = () => {
	const { characterID } = useParams();

	// const [characterFormData, setCharacterFormData] = useState({});
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

	// Character Header Here
	const characterPageID = characterFormData.$id === characterID;

	if (!characterPageID) {
		return (
			<div className="m-4 p-4">
				<p>One moment please...</p>
			</div>
		);
	}

	// useEffect(() => {
	// 	setCharacterFormData(useGetCharacter(characterID));
	// }, [characterFormData]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(name, value);
		// setTemp((prev) => {
		// 	return {
		// 		...prev,
		// 		[`${name}`]: `${value}`,
		// 	};
		// });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(temp);
	};

	return (
		<div className="m-4 p-4">
			<h1 className="text-3xl text-blue-700">{characterData.name}</h1>
			<a href="/" className="text-blue-700 text-sm underline">
				Back to Character List
			</a>
			<div className="flex items-start">
				{/*Character Ability Stat-block here */}
				<div className="flex flex-col my-4 p-4 w-2/12">
					<AbilityStatBlock stat={characterData.strength} label="Strength" />
					<AbilityStatBlock stat={characterData.dexterity} label="Dexterity" />
					<AbilityStatBlock
						stat={characterData.constitution}
						label="Constitution"
					/>
					<AbilityStatBlock
						stat={characterData.intelligence}
						label="Intelligence"
					/>
					<AbilityStatBlock stat={characterData.wisdom} label="Wisdom" />
					<AbilityStatBlock stat={characterData.charisma} label="Charisma" />
				</div>

				{/*Character Details here */}
				<div className="flex flex-row flex-wrap gap-x-4 gap-y-2 my-4 p-4 w-10/12">
					<DetailBlock detail={characterData.class} label="Class" />
					<DetailBlock detail={characterData.level} label="Level" />
					<DetailBlock detail={characterData.background} label="Background" />
					<DetailBlock detail={characterData.race} label="Race" />
					<DetailBlock detail={characterData.alignment} label="Alignment" />
					<DetailBlock detail={characterData.XP} label="XP" />
				</div>
			</div>

			<footer>
				<a href="/" className="text-blue-700 text-sm underline">
					Update Character information:
				</a>
				<CharacterUpdateForm
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			</footer>
		</div>
	);
};
export default Character;
