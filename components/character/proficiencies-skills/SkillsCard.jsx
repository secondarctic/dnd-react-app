import React, { useState } from 'react';
import Input from '../../generic/Input';
import SaveModCard from './SaveModCard';

const SkillsCard = (props) => {
	const checkBoxStyle = 'flex order-first h-4 w-4 border-full';
	const labelStyle = 'text-sm';

	return (
		<>
			{/* Checkbox here */}
			<div className="flex gap-2 items-center text-gray-700">
				<Input
					style={checkBoxStyle}
					id={props.id}
					type="checkbox"
					name={props.name}
					checked={props.isProficient}
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
