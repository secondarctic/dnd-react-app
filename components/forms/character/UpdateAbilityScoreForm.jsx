import React from 'react';
import Input from '../Input';
import Button from '../Button';

const updateAbilityScoreForm = (props) => {
	return (
		<>
			<div className="flex flex-col p-4 gap-2 h-min w-min border border-gray-300 rounded-md">
				<p>{props.title}:</p>
				<form
					className="flex flex-col justify-start p-2 gap-2"
					action=""
					onSubmit={props.handleSubmit}
				>
					<Input
						type="number"
						name="strength"
						id="strength"
						placeholder="strength"
						onChange={props.handleChange}
					/>
					<Input
						type="number"
						name="dexterity"
						id="dexterity"
						placeholder="dexterity"
						onChange={props.handleChange}
					/>
					<Input
						type="number"
						name="constitution"
						id="constitution"
						placeholder="constitution"
						onChange={props.handleChange}
					/>
					<Input
						type="number"
						name="intelligence"
						id="intelligence"
						placeholder="intelligence"
						onChange={props.handleChange}
					/>
					<Input
						type="number"
						name="wisdom"
						id="wisdom"
						placeholder="wisdom"
						onChange={props.handleChange}
					/>
					<Input
						type="number"
						name="charisma"
						id="charisma"
						placeholder="charisma"
						onChange={props.handleChange}
					/>
					<Button type="submit" text="Update" />
				</form>
			</div>
		</>
	);
};

export default updateAbilityScoreForm;
