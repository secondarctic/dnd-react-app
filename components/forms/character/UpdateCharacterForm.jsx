import React from 'react';
import Input from '../Input';
import Button from '../Button';
import UpdateAbilityScoreForm from './UpdateAbilityScoreForm';
import UpdateDetailsForm from './UpdateDetailsForm';

const CharacterUpdateForm = (props) => {
	return (
		<div className="my-2 p-2 h-auto border border-gray-300 rounded-md flex flex-start">
			<div className="flex flex-col justify-start p-2">
				<div className="flex flex-row w-full gap-x-4">
					{/* Ability Score Inputs Here */}
					<UpdateAbilityScoreForm title="Ability Scores" />
					{/* Character Details Here */}
					<UpdateDetailsForm title="Character Details" />
				</div>
			</div>
		</div>
	);
};

export default CharacterUpdateForm;
