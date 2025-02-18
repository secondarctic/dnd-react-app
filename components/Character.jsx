import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useReadDB from '../util/hooks/useReadDB';
import useListCharacter from '../util/hooks/useListCharacter';
import AbilityScores from './forms/character/AbilityScores';

const Character = () => {
	const { characterID } = useParams();

	const [characterData] = useListCharacter(characterID);
	console.log(characterData[`$id`]);

	const [temp, setTemp] = useState({
		name: 'Lex',
	});

	// Character Header Here
	const characterPageID = characterData[`$id`] === characterID;

	if (!characterPageID) {
		return (
			<div className="m-4 p-4">
				<p>One moment please...</p>
			</div>
		);
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(name, value);
		setTemp((prev) => {
			return {
				...prev,
				[`${name}`]: `${value}`,
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(temp);
	};
	// Character Ability Stat-block here
	<div className="flex flex-col w-3 border rounded-sm"></div>;

	return (
		<div className="m-4 p-4">
			<h1 className="text-3xl text-blue-700">
				{characterData['character-name']}
			</h1>
			{/*Character Details here */}
			<div className="flex">
				<div className="flex flex-row flex-wrap gap-2 my-4 p-4 w-7/12">
					<div className="flex flex-col gap-2 w-1/4">
						<p className="text-md font-bold">{characterData[`class`]}</p>
						<p>Class: </p>
					</div>
					<div className="flex flex-col gap-2 w-1/4">
						<p className="text-md font-bold">{characterData[`level`]}</p>
						<p>Level: </p>
					</div>
					<div className="flex flex-col gap-2 w-1/4">
						<p className="text-md font-bold">{characterData[`background`]}</p>
						<p>Background: </p>
					</div>
					<div className="flex flex-col gap-2 w-1/4">
						<p className="text-md font-bold">{characterData[`race`]}</p>
						<p>Race: </p>
					</div>
					<div className="flex flex-col gap-2 w-1/4">
						<p className="text-md font-bold">{characterData[`alignment`]}</p>
						<p>Alignment: </p>
					</div>
					<div className="flex flex-col gap-2 w-1/4">
						<p className="text-md font-bold">{characterData[`XP`]}</p>
						<p>XP: </p>
					</div>
				</div>
				{/*Character Ability Stat-block here */}
				<div className="flex flex-col my-4 p-4 w-5/12">
					<p>Strength: {characterData[`ability-score-strength`]}</p>
					<p>Dexterity: {characterData[`ability-score-dexterity`]}</p>
					<p>Constitution: {characterData[`ability-score-constitution`]}</p>
					<p>Intelligence: {characterData[`ability-score-intelligence`]}</p>
					<p>Wisdom: {characterData[`ability-score-wisdom`]}</p>
					<p>Charisma: {characterData[`ability-score-charisma`]}</p>
				</div>
			</div>
			<AbilityScores handleChange={handleChange} handleSubmit={handleSubmit} />

			<footer>
				<a href="/" className="text-blue-700 underline">
					Back to Character List
				</a>
			</footer>
		</div>
	);
};
export default Character;
