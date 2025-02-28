import React from 'react';
import Button from '../../../components/generic/Button';
import Input from '../../../components/generic/Input';

const UpdateCombatStatForm = (props) => {
	const textStyle =
		'w-44 h-8 px-2 border border-gray-400 rounded-sm text-sm text-black-400';
	return (
		<>
			<div className="flex flex-col p-4 gap-2 h-min w-min border border-gray-300 rounded-md">
				<p>{props.title}:</p>
				<form
					className="flex flex-col justify-start p-2 gap-2"
					onSubmit={props.handleSubmit}
				>
					<Input
						style={textStyle}
						id="armorBonus"
						type="number"
						name="armor-bonus"
						placeholder="bonuses from armor"
						handleChange={props.handleChange}
					/>

					<Input
						style={textStyle}
						id="speed"
						type="number"
						name="speed"
						placeholder="speed"
						handleChange={props.handleChange}
					/>

					<Input
						style={textStyle}
						id="maxHP"
						type="number"
						name="max-hp"
						placeholder="set max hit points"
						handleChange={props.handleChange}
					/>

					<Input
						style={textStyle}
						id="tempHP"
						type="number"
						name="temp-hp"
						placeholder="temporary hit points"
						handleChange={props.handleChange}
					/>

					<Input
						style={textStyle}
						id="hitDice"
						type="text"
						name="hit-dice"
						placeholder="hit dice"
						handleChange={props.handleChange}
					/>

					<Button type="submit" text="update" />
				</form>
			</div>
		</>
	);
};

export default UpdateCombatStatForm;
