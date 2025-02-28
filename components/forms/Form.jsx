import React from 'react';
import Button from '../generic/Button';
import Input from '../generic/Button';

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
