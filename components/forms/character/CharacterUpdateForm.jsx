import React from 'react';
import Input from '../Input';
import Button from '../Button';

const CharacterUpdateForm = (props) => {
	return (
		<div className="my-2 p-2 h-auto border border-gray-300 rounded-md flex flex-start">
			<form
				className="flex flex-col justify-start p-2"
				onSubmit={props.handleSubmit}
			>
				<div className="flex flex-row w-full gap-x-4">
					{/* Ability Score Inputs Here */}
					<div className="flex flex-col p-4 gap-2 h-min w-min border border-gray-300 rounded-md">
						<p>Ability Scores:</p>
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
					</div>
					{/* Character Details Here */}
					<div className="flex flex-col w-full gap-4 p-4 h-min border border-gray-300 rounded-md">
						<p>Character Details:</p>
						<div className="flex flex-row w-full gap-2">
							<Input
								id="class"
								type="text"
								name="class"
								placeholder="class"
								// value={props.value}
							/>
							<Input placeholder="level" />
							<Input placeholder="background" />
						</div>
						<div className="flex flex-row w-full gap-2">
							<Input placeholder="race" />
							<Input placeholder="alignment" />
							<Input placeholder="experience points" />
						</div>
					</div>
				</div>
				<Button text="update" />
			</form>
		</div>
	);
};

export default CharacterUpdateForm;
