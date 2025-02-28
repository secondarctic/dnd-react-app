import React from 'react';

const Button = (props) => {
	const w = props.w ?? 'min';

	return (
		<button
			className={`w-${w} px-2 py-1 border rounded-sm text-blue-600 cursor-pointer`}
		>
			{props.text}
		</button>
	);
};

export default Button;
