import React from 'react';
import Input from '../Input';
import Button from '../Button';

const UpdateDetailsForm = (props) => {
	return (
		<>
			<div className="flex flex-col p-4 gap-2 h-min w-min border border-gray-300 rounded-md">
				{/* <div className="flex flex-col w-full gap-4 p-4 h-min border border-gray-300 rounded-md"> */}
				<p>{props.title}:</p>
				<form
					className="flex flex-col justify-start p-2 gap-2"
					action=""
					onSubmit={props.handleSubmit}
				>
					<Input
						id="class"
						type="text"
						name="class"
						placeholder="class"
						// value={props.value}
					/>
					<Input placeholder="level" />
					<Input placeholder="background" />
					<Input placeholder="race" />
					<Input placeholder="alignment" />
					<Input placeholder="experience points" />
					<Button type="submit" text="update" />
				</form>
			</div>
		</>
	);
};

export default UpdateDetailsForm;
