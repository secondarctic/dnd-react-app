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
					onSubmit={props.handleSubmit}
				>
					<Input
						id="class"
						type="text"
						name="class"
						placeholder="class"
						handleChange={props.handleChange}
					/>
					<Input
						id="level"
						type="text"
						name="level"
						placeholder="level"
						handleChange={props.handleChange}
					/>
					<Input
						id="background"
						type="text"
						name="background"
						placeholder="background"
						handleChange={props.handleChange}
					/>
					<Input
						id="race"
						type="text"
						name="race"
						placeholder="race"
						handleChange={props.handleChange}
					/>
					<Input
						id="alignment"
						type="text"
						name="alignment"
						placeholder="alignment"
						handleChange={props.handleChange}
					/>
					<Input
						id="xp"
						type="text"
						name="xp"
						placeholder="experience points"
						handleChange={props.handleChange}
					/>
					<Button type="submit" text="update" />
				</form>
			</div>
		</>
	);
};

export default UpdateDetailsForm;
