import React from 'react';
import Input from '../../forms/Input';
import SaveModCard from './SaveModCard';

const SavingThrowsCard = (props) => {
	const character = props.character;
	const checkBoxStyle = 'flex order-first h-4 w-4 border-full';
	const labelStyle = 'text-sm';

	return (
		<>
			{/* <form action="" onSubmit={props.handleSubmit}> */}
			<div className="flex gap-2 items-center text-gray-700">
				{/* Checkbox here */}
				<Input
					style={checkBoxStyle}
					id={props.id}
					type="checkbox"
					name={props.name}
					checked={props.isProficient}
					isProficient={props.isProficient}
					handleChange={props.handleChange}
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
			{/* </form> */}
		</>
	);
};

export default SavingThrowsCard;
