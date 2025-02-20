import React, { useState, useEffect } from 'react';
import useReadDB from '../util/hooks/useReadDB.js';
import useCreateDBEntry from '../util/hooks/useCreateDBEntry.js';
import CreateCharacterForm from './forms/character/CreateCharacterForm.jsx';

const CharacterList = (props) => {
	const [characterInfo] = useReadDB();
	const [newCharacterName, setNewCharacterName] = useState('');

	const handleChange = (e) => {
		const { value } = e.target;
		setNewCharacterName(value);
		// console.log(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(newCharacterName);
		useCreateDBEntry(newCharacterName);
	};

	return (
		<div className="m-4 p-4">
			<h1 className="text-3xl text-blue-700">D&D Character Creator</h1>

			<CreateCharacterForm
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>

			<div className="flex gap-x-1 items-baseline">
				<p className="text-sm text-gray-800 no-underline">
					List of Accessible Character Sheets -{' '}
				</p>
				<p className="text-xs text-gray-400 no-underline">
					please navigate to view more detailed character info:
				</p>
			</div>
			<div className="my-2">
				<ul>
					{characterInfo &&
						characterInfo.map((character) => (
							<li key={character.$id}>
								<a
									className="hover:text-blue-700"
									href={`characters/${character.$id}`}
								>
									{character['character-name']}
								</a>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export default CharacterList;
