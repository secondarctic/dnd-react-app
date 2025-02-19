import React from 'react';

const DetailBlock = (props) => {
	return (
		<div className="flex flex-col w-1/4">
			<p className="text-md font-bold">{props.detail}</p>
			<p className="text-xs">{props.label}: </p>
		</div>
	);
};

export default DetailBlock;
