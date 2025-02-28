import React from 'react';

const Input = (props) => {
	return (
		<>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				className={props.style}
				type={props.type}
				id={props.id}
				name={props.name}
				placeholder={props.placeholder}
				value={props.value}
				checked={props.checked}
				onChange={props.handleChange}
			/>
		</>
	);
};

export default Input;
