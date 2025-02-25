import React, { useState } from 'react';

const SaveModCard = (props) => {
	const score = props.stat;

	let isProficient = props.isProficient;

	const proficiencyMod = Number(props.proficiencyBonus);

	let baseMod;
	let isPositive = false;

	if (score < 2) {
		baseMod = -5;
	} else if (score < 4) {
		baseMod = -4;
	} else if (score < 6) {
		baseMod = -3;
	} else if (score < 8) {
		baseMod = -2;
	} else if (score < 10) {
		baseMod = -1;
	} else if (score < 12) {
		baseMod = 0;
	} else if (score < 14) {
		baseMod = 1;
		isPositive = true;
	} else if (score < 16) {
		baseMod = 2;
		isPositive = true;
	} else if (score < 18) {
		baseMod = 3;
		isPositive = true;
	} else if (score < 20) {
		baseMod = 4;
		isPositive = true;
	} else if (score < 22) {
		baseMod = 5;
		isPositive = true;
	}
	return (
		<div className="border h-8 w-8 rounded-bl-lg rounded-tr-lg flex justify-center items-center text-sm text-gray-400 font-bold">
			{isPositive && '+'}
			{isProficient ? baseMod + proficiencyMod : baseMod}
		</div>
	);
};

export default SaveModCard;
