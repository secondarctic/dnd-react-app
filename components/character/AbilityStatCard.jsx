import React from 'react';

const AbilityStatBlock = (props) => {
	return (
		<div className="flex flex-col items-center">
			<div className="border h-20 w-20 rounded-bl-2xl rounded-tr-2xl flex justify-center items-center text-4xl text-blue-900 font-bold">
				{props.stat}
			</div>
			<div className="mb-4">
				<p className="text-xs g">{props.label}</p>
			</div>
		</div>
	);
};

export default AbilityStatBlock;
