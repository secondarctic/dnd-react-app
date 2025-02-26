import React, { useState, useEffect } from 'react';
import SavingThrowsCard from './SavingThrowsCard';
import useUpdateDB from '../../../util/hooks/useUpdateDB';

const SavingThrowsList = (props) => {
	const characterData = props.characterData;

	const [formData, setFormData] = useState({});
	const [detectFormChanges, setDetectFormChanges] = useState(false);

	useEffect(() => {
		if (detectFormChanges) useUpdateDB(characterData.$id, formData);
	}, [detectFormChanges]);

	const handleChange = (e) => {
		const { name, checked } = e.target;

		setFormData((prev) => ({
			...prev,
			[`${name}`]: checked,
		}));

		setDetectFormChanges(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
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
					name="strength-save-proficiency"
					id="strengthSave"
					stat={characterData.strength}
					proficiencyBonus={props.proficiencyBonus}
					handleChange={handleChange}
					isProficient={characterData.strengthSave}
				/>

				<SavingThrowsCard
					saveName="Dexterity Save"
					name="dexterity-save-proficiency"
					id="dexteritySave"
					stat={characterData.dexterity}
					proficiencyBonus={props.proficiencyBonus}
					handleChange={handleChange}
					isProficient={characterData.dexteritySave}
				/>

				<SavingThrowsCard
					saveName="Constitution Save"
					name="constitution-save-proficiency"
					id="constitutionSave"
					stat={characterData.constitution}
					proficiencyBonus={props.proficiencyBonus}
					handleChange={handleChange}
					isProficient={characterData.constitutionSave}
				/>

				<SavingThrowsCard
					saveName="Intelligence Save"
					name="intelligence-save-proficiency"
					id="intelligenceSave"
					stat={characterData.intelligence}
					proficiencyBonus={props.proficiencyBonus}
					handleChange={handleChange}
					isProficient={characterData.intelligenceSave}
				/>

				<SavingThrowsCard
					saveName="Wisdom Save"
					name="wisdom-save-proficiency"
					id="wisdomSave"
					stat={characterData.wisdom}
					proficiencyBonus={props.proficiencyBonus}
					handleChange={handleChange}
					isProficient={characterData.wisdomSave}
				/>

				<SavingThrowsCard
					saveName="Charisma Save"
					name="charisma-save-proficiency"
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
