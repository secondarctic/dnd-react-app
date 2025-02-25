import React, { useState } from 'react';
import Input from '../forms/Input';
import SaveModCard from './SaveModCard';

const SavingThrowsCard = (props) => {
	const checkBoxStyle = 'flex order-first';
	const labelStyle = 'text-sm';

	return (
		<>
			{/* Checkbox here */}
			<div className="flex gap-2 items-center text-gray-700">
				<Input
					style={checkBoxStyle}
					id={props.skill}
					type="checkbox"
					name={props.save}
					handleChange={props.handleChange}
					isProficient={props.isProficient}
				/>

				{/* Modifier here */}
				<SaveModCard
					isProficient={props.isProficient}
					proficiencyBonus={props.proficiencyBonus}
					stat={props.stat}
				/>

				{/* Label Here */}
				<div className={labelStyle}>
					<p>{props.saveName}</p>
				</div>
			</div>
		</>
	);
};

export default SavingThrowsCard;
