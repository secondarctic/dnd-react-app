import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UpdateCharacterForm from '../forms/character/UpdateCharacterForm';
import useGetCharacter from '../../util/hooks/useGetCharacter';
import useUpdateDB from '../../util/hooks/useUpdateDB';
import DetailsCard from './DetailsCard';
import AbilityStatCard from './AbilityStatCard';
import AbilityModCard from './AbilityModCard';
import ProficiencyBlock from './ProficiencyBlock';
import SkillsCard from './SkillsCard';

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
		console.log(formData);
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
						<div>
							{/*Character Name here */}
							<h1 className="text-3xl text-blue-700 pb-1 my-1 border-b-2 border-b-blue-700">
								{characterFormData.name}
							</h1>
							<a href="/" className="text-blue-700 text-sm underline">
								Back to Character List
							</a>
						</div>
						<div className="flex flex-col">
							{/*Character Details here */}
							<div className="flex flex-col gap-5 p-4">
								<div className="flex flex-row flex-wrap w-auto gap-4">
									<DetailsCard detail={characterFormData.class} label="Class" />
									<DetailsCard detail={characterFormData.level} label="Level" />
									<DetailsCard
										detail={characterFormData.background}
										label="Background or Profession"
									/>
									<DetailsCard detail={characterFormData.race} label="Race" />
									<DetailsCard
										detail={characterFormData.alignment}
										label="Alignment"
									/>
									<DetailsCard detail={characterFormData.xp} label="XP" />
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-row justify-start items-start gap-4">
						{/*Character Ability Stat-blocks here */}
						<div className="flex flex-col my-4 p-4 w-min border border-gray-300 rounded-md">
							<div className="flex flex-row gap-2 items-baseline">
								<AbilityStatCard
									stat={characterFormData.strength}
									label="Strength"
								/>
								<AbilityModCard stat={characterFormData.strength} />
							</div>
							<div className="flex flex-row gap-2 items-baseline">
								<AbilityStatCard
									stat={characterFormData.dexterity}
									label="Dexterity"
								/>
								<AbilityModCard stat={characterFormData.dexterity} />
							</div>
							<div className="flex flex-row gap-2 items-baseline">
								<AbilityStatCard
									stat={characterFormData.constitution}
									label="Constitution"
								/>
								<AbilityModCard stat={characterFormData.constitution} />
							</div>
							<div className="flex flex-row gap-2 items-baseline">
								<AbilityStatCard
									stat={characterFormData.intelligence}
									label="Intelligence"
								/>
								<AbilityModCard stat={characterFormData.intelligence} />
							</div>
							<div className="flex flex-row gap-2 items-baseline">
								<AbilityStatCard
									stat={characterFormData.wisdom}
									label="Wisdom"
								/>
								<AbilityModCard stat={characterFormData.wisdom} />
							</div>
							<div className="flex flex-row gap-2 items-baseline">
								<AbilityStatCard
									stat={characterFormData.charisma}
									label="Charisma"
								/>
								<AbilityModCard stat={characterFormData.charisma} />
							</div>
						</div>

						{/* Proficiencies & Savings Throws Block */}
						<div className="flex flex-col my-4 p-4 w-min border border-gray-300 rounded-md">
							<ProficiencyBlock characterData={characterFormData} />
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
