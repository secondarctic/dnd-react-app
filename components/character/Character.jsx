import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import UpdateCharacterForm from '../forms/character/UpdateCharacterForm';
import useGetCharacter from '../../util/hooks/useGetCharacter';
import useUpdateDB from '../../util/hooks/useUpdateDB';
import DetailsBlock from './details/DetailsBlock';
import AbilityStatBlock from './abilities/AbilityStatBlock';
import ProficiencyBlock from './proficiencies-skills/ProficiencyBlock';
import CombatBlock from './combat/CombatBlock';

const Character = () => {
	const { characterID } = useParams();

	const { characterFormData, isLoading } = useGetCharacter(characterID);

	const [formData, setFormData] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		useUpdateDB(characterID, formData);
	};

	if (isLoading) {
		return (
			<div className="m-4 p-4 text-3xl">
				<p>Loading...</p>
			</div>
		);
	} else {
		return (
			<>
				<div className="m-4 p-4">
					<div className="p-4 flex flex-row gap-8 items-start border border-gray-300 rounded-md">
						<div className="min-w-75">
							{/* Character Name here */}
							<h1 className="text-3xl text-blue-700 pb-1 my-1 border-b-2 border-b-blue-700">
								{characterFormData.name}
							</h1>
							<a href="/" className="text-blue-700 text-sm underline">
								Back to Character List
							</a>
						</div>

						<div className="flex flex-col">
							{/* Character Details here */}
							<DetailsBlock characterData={characterFormData} />
						</div>
					</div>

					<div className="flex flex-row justify-start items-start gap-4">
						{/* Character Ability Stat Blocks here */}
						<AbilityStatBlock characterData={characterFormData} />

						{/* Proficiencies, Savings Throws, & Skills Block */}
						<div className="flex flex-col my-4 p-4 w-min border border-gray-300 rounded-md">
							<ProficiencyBlock characterData={characterFormData} />
						</div>

						{/* Combat (Amor Class, Initiative, Speed & Hit Points) Block */}
						<div className="flex flex-col gap-4 items-center my-4 p-4 w-min border border-gray-300 rounded-md">
							<CombatBlock characterData={characterFormData} />
						</div>
					</div>

					<footer>
						<a href="/" className="text-blue-700 text-sm underline">
							Update Character information:
						</a>
						<UpdateCharacterForm
							handleChange={handleChange}
							handleSubmit={handleSubmit}
						/>
					</footer>
				</div>
			</>
		);
	}
};
export default Character;
