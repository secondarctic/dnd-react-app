import React, { useState } from 'react';
import SkillsCard from './SkillsCard';

const SkillsList = (props) => {
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
				<h3 className="text-xl">Skills</h3>

				<SkillsCard
					skillName="Acrobatics"
					skill="acrobatics"
					abilityDependency={character.dexterity}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={isProficient}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Animal Handling"
					skill="animalHandling"
					abilityDependency={character.wisdom}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={isProficient}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Arcana"
					skill="arcana"
					abilityDependency={character.intelligence}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={isProficient}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Athletics"
					skill="athletics"
					abilityDependency={character.strength}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={isProficient}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Deception"
					skill="deception"
					abilityDependency={character.charisma}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={isProficient}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="History"
					skill="history"
					abilityDependency={character.intelligence}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={isProficient}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Insight"
					skill="insight"
					abilityDependency={character.wisdom}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={isProficient}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Intimidation"
					skill="intimidation"
					abilityDependency={character.charisma}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={isProficient}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Investigation"
					skill="investigation"
					abilityDependency={character.intelligence}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={isProficient}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Medicine"
					skill="medicine"
					abilityDependency={character.wisdom}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={isProficient}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Nature"
					skill="nature"
					abilityDependency={character.intelligence}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={isProficient}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Perception"
					skill="perception"
					abilityDependency={character.wisdom}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={isProficient}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Performance"
					skill="performance"
					abilityDependency={character.charisma}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={isProficient}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Persuasion"
					skill="persuasion"
					abilityDependency={character.charisma}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={isProficient}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Religion"
					skill="religion"
					abilityDependency={character.intelligence}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={isProficient}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Sleight of Hand"
					skill="sleightOfHand"
					abilityDependency={character.dexterity}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={isProficient}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Stealth"
					skill="stealth"
					abilityDependency={character.dexterity}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={isProficient}
					handleChange={handleChange}
				/>

				<SkillsCard
					skillName="Survival"
					skill="survival"
					abilityDependency={character.wisdom}
					proficiencyBonus={props.proficiencyBonus}
					isProficient={isProficient}
					handleChange={handleChange}
				/>
			</form>
		</>
	);
};

export default SkillsList;
