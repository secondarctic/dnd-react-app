import React from 'react';
import InspoProfCard from './InspoProfCard';
import SavingThrowsCard from './SavingThrowsCard';
import SkillsList from './SkillsList';
import SavingThrowsList from './SavingThrowsList';

const ProficiencyBlock = (props) => {
	const character = props.characterData;
	const level = character.level;

	let proficiencyBonus;

	if (level < 5) {
		proficiencyBonus = 2;
	} else if (level < 9) {
		proficiencyBonus = 3;
	} else if (level < 13) {
		proficiencyBonus = 4;
	} else if (level < 17) {
		proficiencyBonus = 5;
	} else if (level <= 20) {
		proficiencyBonus = 6;
	}

	return (
		<>
			<div className="flex flex-col gap-4">
				<InspoProfCard proficiencyBonus={proficiencyBonus} />

				<SavingThrowsList
					characterData={character}
					proficiencyBonus={proficiencyBonus}
				/>

				<SkillsList
					characterData={character}
					proficiencyBonus={proficiencyBonus}
				/>
			</div>
		</>
	);
};

export default ProficiencyBlock;
