import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UpdateCharacterForm from '../forms/character/UpdateCharacterForm';
import useGetCharacter from '../../util/hooks/useGetCharacter';
import useUpdateDB from '../../util/hooks/useUpdateDB';
import DetailsCard from './DetailsCard';
import AbilityStatCard from './AbilityStatCard';
import AbilityModCard from './AbilityModCard';

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
					<h1 className="text-3xl text-blue-700">{characterFormData.name}</h1>
					<a href="/" className="text-blue-700 text-sm underline">
						Back to Character List
					</a>

					<div className="flex items-start">
						{/*Character Ability Stat-block here */}
						<div className="flex flex-col my-4 p-4 w-2/12">
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
						<div className="flex flex-col my-4 p-4 w-2/12"></div>

						{/*Character Details here */}
						<div className="flex flex-row flex-wrap gap-x-4 gap-y-2 my-4 p-4 w-10/12">
							<DetailsCard detail={characterFormData.class} label="Class" />
							<DetailsCard detail={characterFormData.level} label="Level" />
							<DetailsCard
								detail={characterFormData.background}
								label="Background / Profession"
							/>
							<DetailsCard detail={characterFormData.race} label="Race" />
							<DetailsCard
								detail={characterFormData.alignment}
								label="Alignment"
							/>
							<DetailsCard detail={characterFormData.xp} label="XP" />
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
