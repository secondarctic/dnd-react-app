import React from 'react';

const DetailBlock = (props) => {
	return (
		<div className="flex flex-col w-1/4">
			<p className="text-md text-gray-700 font-bold border-b mb-0.5 py-0.5">
				{props.detail}
			</p>
			<p className="text-xs">{props.label}: </p>
		</div>
	);
};

export default DetailBlock;
