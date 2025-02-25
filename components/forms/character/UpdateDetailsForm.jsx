import React from 'react';
import Input from '../Input';
import Button from '../Button';

const UpdateDetailsForm = (props) => {
	const textStyle =
		'w-44 h-8 px-2 border border-gray-400 rounded-sm text-sm text-black-400';
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
						style={textStyle}
						id="class"
						type="text"
						name="class"
						placeholder="class"
						handleChange={props.handleChange}
					/>
					<Input
						style={textStyle}
						id="level"
						type="text"
						name="level"
						placeholder="level"
						handleChange={props.handleChange}
					/>
					<Input
						style={textStyle}
						id="background"
						type="text"
						name="background"
						placeholder="background"
						handleChange={props.handleChange}
					/>
					<Input
						style={textStyle}
						id="race"
						type="text"
						name="race"
						placeholder="race"
						handleChange={props.handleChange}
					/>
					<Input
						style={textStyle}
						id="alignment"
						type="text"
						name="alignment"
						placeholder="alignment"
						handleChange={props.handleChange}
					/>
					<Input
						style={textStyle}
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
