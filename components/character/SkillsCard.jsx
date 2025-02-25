import React, { useState } from 'react';
import Input from '../forms/Input';
import SaveModCard from './SaveModCard';

const SkillsCard = (props) => {
	const checkBoxStyle = 'flex order-first';
	const labelStyle = 'text-sm';

	return (
		<>
			{/* Checkbox here */}
			<div className="flex gap-2 items-center">
				<Input
					style={checkBoxStyle}
					id={props.skill}
					type="checkbox"
					name={props.skill}
					handleChange={props.handleChange}
					isProficient={props.isProficient}
				/>

				{/* Modifier here */}
				<SaveModCard
					isProficient={props.isProficient}
					proficiencyBonus={props.proficiencyBonus}
					stat={props.abilityDependency}
				/>

				{/* Label Here */}
				<div className={labelStyle}>
					<p>{props.skillName}</p>
				</div>
			</div>
		</>
	);
};

export default SkillsCard;
