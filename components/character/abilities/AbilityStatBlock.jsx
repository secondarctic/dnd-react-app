import React from 'react';
import AbilityStatCard from './AbilityStatCard';
import AbilityModCard from './AbilityModCard';

const AbilityStatBlock = (props) => {
	const character = props.characterData;
	console.log('char', character);
	return (
		<>
			<div className="flex flex-col my-4 p-4 w-min border border-gray-300 rounded-md">
				<div className="flex flex-row gap-2 items-baseline">
					<AbilityStatCard stat={character.strength} label="Strength" />
					<AbilityModCard stat={character.strength} />
				</div>
				<div className="flex flex-row gap-2 items-baseline">
					<AbilityStatCard stat={character.dexterity} label="Dexterity" />
					<AbilityModCard stat={character.dexterity} />
				</div>
				<div className="flex flex-row gap-2 items-baseline">
					<AbilityStatCard stat={character.constitution} label="Constitution" />
					<AbilityModCard stat={character.constitution} />
				</div>
				<div className="flex flex-row gap-2 items-baseline">
					<AbilityStatCard stat={character.intelligence} label="Intelligence" />
					<AbilityModCard stat={character.intelligence} />
				</div>
				<div className="flex flex-row gap-2 items-baseline">
					<AbilityStatCard stat={character.wisdom} label="Wisdom" />
					<AbilityModCard stat={character.wisdom} />
				</div>
				<div className="flex flex-row gap-2 items-baseline">
					<AbilityStatCard stat={character.charisma} label="Charisma" />
					<AbilityModCard stat={character.charisma} />
				</div>
			</div>
		</>
	);
};

export default AbilityStatBlock;
