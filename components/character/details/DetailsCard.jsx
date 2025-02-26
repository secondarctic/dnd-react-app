import React from 'react';

const DetailBlock = (props) => {
	return (
		<div className="flex flex-col">
			<div className="w-50 min-h-8 max-w-55 border-b mb-0.5 py-0.5">
				<p className="text-md text-gray-700 font-bold">{props.detail}</p>
			</div>

			<p className="text-xs">{props.label}: </p>
		</div>
	);
};

export default DetailBlock;
