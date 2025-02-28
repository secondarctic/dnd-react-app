import React from 'react';
import Button from '../../../components/generic/Button';
import Input from '../../../components/generic/Input';

const CreateCharacterForm = (props) => {
	const textStyle =
		'w-70 h-8 px-2 border border-gray-400 rounded-sm text-sm text-black-400';

	return (
		<div className="my-4 p-4 h-auto border border-gray-300 rounded-md min-w-max max-w-200">
			<form
				className="flex flex-col justify-start gap-2"
				onSubmit={props.handleSubmit}
			>
				<Input
					style={textStyle}
					id="characterName"
					type="text"
					name="name"
					placeholder="enter new character name"
					handleChange={props.handleChange}
				/>
				<Button text="Submit" w="20" />
			</form>
		</div>
	);
};

export default CreateCharacterForm;
