import React from 'react';
import DetailsCard from './DetailsCard';

const DetailsBlock = (props) => {
	const character = props.characterData;

	return (
		<>
			<div className="flex flex-row flex-wrap w-auto gap-8">
				<DetailsCard detail={character.class} label="Class" />
				<DetailsCard detail={character.level} label="Level" />
				<DetailsCard
					detail={character.background}
					label="Background or Profession"
				/>
				<DetailsCard detail={character.race} label="Race" />
				<DetailsCard detail={character.alignment} label="Alignment" />
				<DetailsCard detail={character.xp} label="XP" />
			</div>
		</>
	);
};

export default DetailsBlock;
