import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = (props) => {
	return (
		<form
			className="flex flex-col justify-start gap-2"
			onSubmit={props.handleSubmit}
		>
			<Input type="" name="" placeholder="" handleChange={props.handleChange} />
			<Button text="Submit" />
		</form>
	);
};

export default Form;
