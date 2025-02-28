import React from 'react';
import UpdateAbilityScoreForm from './UpdateAbilityScoreForm';
import UpdateDetailsForm from './UpdateDetailsForm';
import UpdateCombatStatForm from './UpdateCombatStatForm';

const CharacterUpdateForm = (props) => {
	return (
		<div className="my-2 p-2 h-auto border border-gray-300 rounded-md flex flex-start">
			<div className="flex flex-col justify-start p-2">
				<div className="flex flex-row w-full gap-x-4">
					{/* Ability Score Inputs Here */}
					<UpdateAbilityScoreForm
						title="Ability Scores (1–20)"
						handleChange={props.handleChange}
						handleSubmit={props.handleSubmit}
					/>
					{/* Character Details Here */}
					<UpdateDetailsForm
						title="Character Details"
						handleChange={props.handleChange}
						handleSubmit={props.handleSubmit}
					/>
					<UpdateCombatStatForm
						title="Combat Stats"
						handleChange={props.handleChange}
						handleSubmit={props.handleSubmit}
					/>
				</div>
			</div>
		</div>
	);
};

export default CharacterUpdateForm;
