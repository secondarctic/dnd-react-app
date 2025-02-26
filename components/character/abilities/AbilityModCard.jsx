import React from 'react';
import useAbilityScoreModifier from '../../../util/hooks/useAbilityScoreModifier';

const AbilityModCard = (props) => {
	const scoreModifier = useAbilityScoreModifier(props.stat);

	return (
		<div className="flex flex-col items-center ">
			<div className="border h-12 w-12 rounded-br-2xl rounded-tl-2xl flex justify-center items-center text-2xl text-gray-500 font-bold">
				{scoreModifier > 0 ? '+' : ''}
				{scoreModifier}
			</div>
			<div className="mb-4">
				<p className="text-xs">{props.label}</p>
			</div>
		</div>
	);
};

export default AbilityModCard;
