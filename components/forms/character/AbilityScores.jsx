import React from 'react';
import Input from '../Input';
import Button from '../Button';

const AbilityScores = (props) => {
	return (
		<div className="my-4 p-4 h-auto border border-gray-300 rounded-md">
			<form className="flex flex-col gap-2" onSubmit={props.handleSubmit}>
				<p>Str</p>
				<label htmlFor="strength"></label>
				<Input
					type="number"
					name="strength"
					id="strength"
					placeholder=""
					onChange={props.handleChange}
				/>
				<Button text="update" />
			</form>
		</div>
	);
};

export default AbilityScores;
