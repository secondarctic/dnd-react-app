import React, { useState, useEffect } from 'react';
import SkillsCard from './SkillsCard';
import useUpdateDB from '../../../util/hooks/useUpdateDB';

const SkillsList = (props) => {
	const characterData = props.characterData;

	const [formData, setFormData] = useState({});
	const [detectFormChanges, setDetectFormChanges] = useState(false);

	useEffect(() => {
		if (detectFormChanges) {
			useUpdateDB(characterData.$id, formData);
		}
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
				onSubmit={props.handleSubmit}
			>
				<h3 className="text-xl">Skills</h3>

				<SkillsCard
					skillName="Acrobatics"
					name="skill-acrobatics"
					id="acrobatics"
					abilityDependency={characterData.dexterity}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={characterData.acrobatics}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Animal Handling"
					name="skill-animal-handling"
					id="animalHandling"
					abilityDependency={characterData.wisdom}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={characterData.animalHandling}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Arcana"
					name="skill-arcana"
					id="arcana"
					abilityDependency={characterData.intelligence}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={characterData.arcana}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Athletics"
					name="skill-athletics"
					id="athletics"
					abilityDependency={characterData.strength}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={characterData.athletics}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Deception"
					name="skill-deception"
					id="deception"
					abilityDependency={characterData.charisma}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={characterData.deception}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="History"
					name="skill-history"
					id="history"
					abilityDependency={characterData.intelligence}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={characterData.history}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Insight"
					name="skill-insight"
					id="insight"
					abilityDependency={characterData.wisdom}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={characterData.insight}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Intimidation"
					name="skill-intimidation"
					id="intimidation"
					abilityDependency={characterData.charisma}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={characterData.intimidation}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Investigation"
					name="skill-investigation"
					id="investigation"
					abilityDependency={characterData.intelligence}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={characterData.investigation}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Medicine"
					name="skill-medicine"
					id="medicine"
					abilityDependency={characterData.wisdom}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={characterData.medicine}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Nature"
					name="skill-nature"
					id="nature"
					abilityDependency={characterData.intelligence}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={characterData.nature}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Perception"
					name="skill-perception"
					id="perception"
					abilityDependency={characterData.wisdom}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={characterData.perception}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Performance"
					name="skill-performance"
					id="performance"
					abilityDependency={characterData.charisma}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={characterData.performance}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Persuasion"
					name="skill-persuasion"
					id="persuasion"
					abilityDependency={characterData.charisma}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={characterData.persuasion}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Religion"
					name="skill-religion"
					id="religion"
					abilityDependency={characterData.intelligence}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={characterData.religion}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Sleight of Hand"
					name="skill-sleight-of-hand"
					id="sleightOfHand"
					abilityDependency={characterData.dexterity}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={characterData.sleightOfHand}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Stealth"
					name="skill-stealth"
					id="stealth"
					abilityDependency={characterData.dexterity}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={characterData.stealth}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Survival"
					name="skill-survival"
					id="survival"
					abilityDependency={characterData.wisdom}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={characterData.survival}
					handleChange={handleChange}
				/>
			</form>
		</>
	);
};

export default SkillsList;
