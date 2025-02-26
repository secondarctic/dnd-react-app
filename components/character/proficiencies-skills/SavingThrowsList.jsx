import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SavingThrowsCard from './SavingThrowsCard';
import useUpdateDB from '../../../util/hooks/useUpdateDB';

const SavingThrowsList = (props) => {
	const characterData = props.characterData;

	const [formData, setFormData] = useState({});

	const handleChange = (e) => {
		const { name, checked } = e.target;

		setFormData((prev) => ({
			...prev,
			[`${name}`]: checked,
		}));

		console.log('character id', characterData.$id);
		console.log(formData);
		// useUpdateDB(characterData.$id, formData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// useUpdateDB(characterData.$id, formData);
	};
	return (
		<>
			<form
				className="p-4 flex flex-col gap-2 border border-gray-300 rounded-md"
				onSubmit={handleSubmit}
			>
				<h3 className="text-xl">Saving Throws</h3>

				<SavingThrowsCard
					saveName="Strength Save"
					name="strengthSave"
					id="strengthSave"
					stat={characterData.strength}
					proficiencyBonus={props.proficiencyBonus}
					handleChange={handleChange}
					isProficient={characterData.strengthSave}
				/>

				<SavingThrowsCard
					saveName="Dexterity Save"
					name="dexteritySave"
					id="dexteritySave"
					stat={characterData.dexterity}
					proficiencyBonus={props.proficiencyBonus}
					handleChange={handleChange}
					isProficient={characterData.dexteritySave}
				/>

				<SavingThrowsCard
					saveName="Constitution Save"
					name="constitutionSave"
					id="constitutionSave"
					stat={characterData.constitution}
					proficiencyBonus={props.proficiencyBonus}
					handleChange={handleChange}
					isProficient={characterData.constitutionSave}
				/>

				<SavingThrowsCard
					saveName="Intelligence Save"
					name="intelligenceSave"
					id="intelligenceSave"
					stat={characterData.intelligence}
					proficiencyBonus={props.proficiencyBonus}
					handleChange={handleChange}
					isProficient={characterData.intelligenceSave}
				/>

				<SavingThrowsCard
					saveName="Wisdom Save"
					name="wisdomSave"
					id="wisdomSave"
					stat={characterData.wisdom}
					proficiencyBonus={props.proficiencyBonus}
					handleChange={handleChange}
					isProficient={characterData.wisdomSave}
				/>

				<SavingThrowsCard
					saveName="Charisma Save"
					name="charismaSave"
					id="charismaSave"
					stat={characterData.charisma}
					proficiencyBonus={props.proficiencyBonus}
					handleChange={handleChange}
					isProficient={characterData.charismaSave}
				/>
			</form>
		</>
	);
};

export default SavingThrowsList;
