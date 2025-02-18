import React from 'react';

const Input = (props) => {
	return (
		<>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				className="w-min px-2 border border-gray-400 rounded-sm text-sm text-black-400"
				type={props.type}
				id={props.id}
				name={props.name}
				placeholder={props.placeholder}
				value={props.value}
				onChange={props.handleChange}
			/>
		</>
	);
};

export default Input;
