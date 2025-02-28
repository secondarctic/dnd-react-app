import React from 'react';

const HitPointsCard = (props) => {
	return (
		<>
			<div
				className={`p-2 ${props.w} min-h-20 flex flex-col justify-center items-center gap-4 border border-gray-300 rounded-md`}
			>
				<div className="text-3xl text-gray-500 font-medium">{props.stat}</div>
				<p className="text-xs text-center text-gray-500">{props.label}</p>
			</div>
		</>
	);
};

export default HitPointsCard;
