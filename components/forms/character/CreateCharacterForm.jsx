import React from 'react';
import Button from '../Button';
import Input from '../Input';

const CreateCharacterForm = (props) => {
	return (
		<div className="my-4 p-4 h-auto border border-gray-300 rounded-md">
			<form
				className="flex flex-col justify-start gap-2"
				onSubmit={props.handleSubmit}
			>
				<Input
					type="text"
					name="name"
					placeholder="enter character name"
					handleChange={props.handleChange}
				/>
				<Button text="Submit" />
			</form>
		</div>
	);
};

export default CreateCharacterForm;
