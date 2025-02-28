import React from 'react';
import CombatCard from './CombatCard';

const CombatBlock = (props) => {
	const characterData = props.characterData;

	return (
		<>
			<CombatCard characterData={characterData} />
		</>
	);
};

export default CombatBlock;
