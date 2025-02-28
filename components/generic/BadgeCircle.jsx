import React from 'react';

const BadgeSquare = (props) => {
	return (
		<>
			<div className="flex flex-col items-center gap-y-0.5">
				<div
					className={`border h-${props.h} w-${props.w} rounded-full flex justify-center items-center text-4xl text-blue-900 font-bold`}
				>
					{props.isPositive && '+'}
					{props.stat}
				</div>
				<div className="mb-4">
					<p className="text-xs g">{props.label}</p>
				</div>
			</div>
		</>
	);
};

export default BadgeSquare;
