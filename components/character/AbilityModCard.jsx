import React from 'react';

const AbilityModCard = (props) => {
	const score = props.stat;
	// console.log('score', score);
	let mod;
	let style;
	if (score < 2) {
		mod = '-5';
	} else if (score < 4) {
		mod = '-4';
	} else if (score < 6) {
		mod = '-3';
	} else if (score < 8) {
		mod = '-2';
	} else if (score < 10) {
		mod = '-1';
	} else if (score < 12) {
		mod = '0';
	} else if (score < 14) {
		mod = '+1';
	} else if (score < 16) {
		mod = '+2';
	} else if (score < 18) {
		mod = '+3';
	} else if (score < 20) {
		mod = '+4';
	} else if (score < 22) {
		mod = '+5';
	}
	return (
		<div className="flex flex-col items-center">
			<div className="border h-12 w-12 rounded-full flex justify-center items-center text-2xl text-gray-500 font-bold">
				{mod}
			</div>
			<div className="mb-4">
				<p className="text-xs">{props.label}</p>
			</div>
		</div>
	);
};

export default AbilityModCard;
