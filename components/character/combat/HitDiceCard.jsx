import React from 'react';

const HitDiceCard = (props) => {
	return (
		<>
			<div
				className={`p-4 ${props.w} flex flex-col border justify-center items-center border-gray-300 rounded-md`}
			>
				<div className="text-lg text-gray-600">{props.stat}</div>
				<p className="text-xs text-gray-500">hit dice</p>
			</div>
		</>
	);
};

export default HitDiceCard;
