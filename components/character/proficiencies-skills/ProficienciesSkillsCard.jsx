import React from 'react';
import useAbilityScoreModifier from '../../../util/hooks/useAbilityScoreModifier';

const InspoProfCard = (props) => {
	const character = props.characterData;

	const wisdomMod = useAbilityScoreModifier(character.wisdom);

	let passivePerception = 10;

	character.wisdomSave
		? (passivePerception += props.proficiencyBonus + wisdomMod)
		: (passivePerception += wisdomMod);

	return (
		<>
			{/* Inspiration */}
			<div className="flex gap-2 items-center text-xl">
				<div className="flex justify-center items-center border rounded-full h-15 w-15  text-blue-900 font-semibold">
					{passivePerception}
				</div>
				<div className="min-w-50 p-4 border border-gray-300 rounded-md">
					<p>Passive Perception</p>
				</div>
			</div>
			{/* Proficiency Bonus */}
			<div className="flex gap-2 items-center text-xl">
				<div className="flex justify-center items-center border rounded-full h-15 w-15 text-blue-900 font-semibold">
					{'+'}
					{props.proficiencyBonus}
				</div>
				<div className="min-w-50 p-4 border border-gray-300 rounded-md">
					<p>Proficiency Bonus</p>
				</div>
			</div>
		</>
	);
};

export default InspoProfCard;
