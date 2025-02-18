import React from 'react';

const Input = (props) => {
	return (
		<>
			<input
				className="w-min px-2 border border-gray-400 rounded-sm text-sm text-black-400"
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
				onChange={props.handleChange}
			/>
		</>
	);
};

export default Input;
