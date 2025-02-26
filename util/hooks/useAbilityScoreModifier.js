import React from 'react';

const AbilityScoreModifier = (score) => {
	let abilityScoreMod = 0;

	if (score < 2) {
		abilityScoreMod -= 5;
	} else if (score < 4) {
		abilityScoreMod -= 4;
	} else if (score < 6) {
		abilityScoreMod -= 3;
	} else if (score < 8) {
		abilityScoreMod -= 2;
	} else if (score < 10) {
		abilityScoreMod -= 1;
	} else if (score < 12) {
		abilityScoreMod += 0;
	} else if (score < 14) {
		abilityScoreMod += 1;
	} else if (score < 16) {
		abilityScoreMod += 2;
	} else if (score < 18) {
		abilityScoreMod += 3;
	} else if (score < 20) {
		abilityScoreMod += 4;
	} else if (score < 22) {
		abilityScoreMod += 5;
	}

	return abilityScoreMod;
};

export default AbilityScoreModifier;
