import React from 'react';

const Button = (props) => {
	return (
		<button className="w-min p-1 border rounded-sm text-blue-600 cursor-pointer">
			{props.text}
		</button>
	);
};

export default Button;
