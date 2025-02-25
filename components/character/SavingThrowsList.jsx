import React, { useState } from 'react';
import SavingThrowsCard from './SavingThrowsCard';

const SavingThrowsList = (props) => {
	const [isProficient, setIsProficient] = useState(false);

	const character = props.characterData;

	const handleChange = () => {
		setIsProficient(!isProficient);
		console.log(isProficient);
	};

	return (
		<>
			<form
				className="p-4 flex flex-col gap-2 border border-gray-300 rounded-md"
				onSubmit={props.handleSubmit}
			>
				<h3 className="text-xl">Savings Throws</h3>

				<SavingThrowsCard
					saveName="Strength Save"
					stat={character.strength}
					proficiencyBonus={props.proficiencyBonus}
					handleChange={handleChange}
					isProficient={isProficient}
				/>

				<SavingThrowsCard
					saveName="Dexterity Save"
					stat={character.dexterity}
					proficiencyBonus={props.proficiencyBonus}
					handleChange={handleChange}
					isProficient={isProficient}
				/>

				<SavingThrowsCard
					saveName="Constitution Save"
					stat={character.constitution}
					proficiencyBonus={props.proficiencyBonus}
					handleChange={handleChange}
					isProficient={isProficient}
				/>

				<SavingThrowsCard
					saveName="Intelligence Save"
					stat={character.intelligence}
					proficiencyBonus={props.proficiencyBonus}
					handleChange={handleChange}
					isProficient={isProficient}
				/>

				<SavingThrowsCard
					saveName="Wisdom Save"
					stat={character.wisdom}
					proficiencyBonus={props.proficiencyBonus}
					handleChange={handleChange}
					isProficient={isProficient}
				/>

				<SavingThrowsCard
					saveName="Charisma Save"
					stat={character.charisma}
					proficiencyBonus={props.proficiencyBonus}
					handleChange={handleChange}
					isProficient={isProficient}
				/>
			</form>
		</>
	);
};

export default SavingThrowsList;
