import React, { useState } from 'react';
import useAbilityScoreModifier from '../../../util/hooks/useAbilityScoreModifier';
import BadgeSquare from '../../generic/BadgeSquare';
import HitPointsCard from './HitPointsCard';
import HitDiceCard from './HitDiceCard';
import Input from '../../generic/Input';
import Button from '../../generic/Button';
import useUpdateDB from '../../../util/hooks/useUpdateDB';
import UpdateHitPointsForm from '../../forms/character/UpdateHitPointsForm';

const CombatCard = (props) => {
	const character = props.characterData;

	const characterID = character.$id;

	const dexMod = useAbilityScoreModifier(character.dexterity);

	const isPositive = dexMod > 0;

	const armorWorn = Number(character.armorBonus);
	const armorClass = armorWorn > 0 ? 10 + armorWorn : 10 + dexMod;

	let maxHP = Number(character.maxHP);
	let tempHP = Number(character.tempHP);
	let heal = Number(character.heal);
	let damage = Number(character.damage);
	let currentHP = maxHP + tempHP + heal - damage;
	// set heal limit to maxHP
	if (currentHP > maxHP) {
		currentHP = maxHP;
	}

	const [formData, setFormData] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		useUpdateDB(characterID, formData);
	};

	return (
		<>
			{/* AC, Initiative Modifier, Movement Speed here */}
			<div className="flex flex-row gap-4">
				<BadgeSquare stat={armorClass} h="20" w="20" label="Armor Class" />
				<BadgeSquare
					stat={dexMod}
					h="20"
					w="20"
					isPositive={isPositive}
					label="Initiative"
				/>
				<BadgeSquare stat={character.speed} h="20" w="20" label="Speed" />
			</div>

			{/* Bonuses from armor worn here */}
			<div className="p-4 w-68 flex flex-row items-center gap-4 border border-gray-300 rounded-md">
				<div className="p-4 flex justify-center items-center h-12 w-12 border border-gray-700 rounded-md">
					{armorWorn > 0 ? '+' : ''}
					{armorWorn}
				</div>
				<p>Armor Bonus</p>
			</div>

			{/* Hit Points Section here */}
			<div className="flex flex-row gap-4 justify-center w-68">
				<HitPointsCard stat={currentHP} label="current hit points" w="w-3/5" />

				{/* <div className="w-28"> */}
				<UpdateHitPointsForm
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
				{/* </div> */}
			</div>

			{/* Hit Dice & Death Saves here */}
			<div className="flex flex-row gap-4 w-68">
				<HitPointsCard stat={character.tempHP} label="temp hp" w="w-2/5" />
				<HitDiceCard stat={character.hitDice} w="w-3/5" />
			</div>
		</>
	);
};

export default CombatCard;
