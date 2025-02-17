import React from 'react';
import { useParams } from 'react-router-dom';
import useReadDB from '../util/hooks/useReadDB';

const Character = () => {
	const { characterID } = useParams();

	const [characterInfo] = useReadDB();

	const newCharacter = characterInfo.find(
		(character) => character.$id.toString() === characterID
	);
	if (!newCharacter) {
		return (
			<div className="m-4 p-4">
				<p>One moment please...</p>
			</div>
		);
	}
	return (
		<div className="m-4 p-4">
			<h1 className="text-3xl text-blue-700">
				{newCharacter['character-name']}
			</h1>
			<footer>
				<a href="/" className="text-blue-700 underline">
					Back to Character List
				</a>
			</footer>
		</div>
	);
};

export default Character;
