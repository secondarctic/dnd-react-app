import React from 'react';
import useAbilityScoreModifier from '../../../util/hooks/useAbilityScoreModifier';

const SaveModCard = (props) => {
	const abilityScoreModifier = useAbilityScoreModifier(props.stat);

	let isProficient = props.isProficient;
	const proficiencyMod = Number(props.proficiencyBonus);

	return (
		<div className="border h-8 w-8 rounded-bl-lg rounded-tr-lg flex justify-center items-center text-sm text-gray-400 font-bold">
			{abilityScoreModifier > 0 ? '+' : ''}
			{isProficient
				? abilityScoreModifier + proficiencyMod
				: abilityScoreModifier}
		</div>
	);
};

export default SaveModCard;
