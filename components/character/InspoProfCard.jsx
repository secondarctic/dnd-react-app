import React from 'react';

const InspoProfCard = (props) => {
	return (
		<>
			{/* Inspiration */}
			<div className="flex gap-2 items-center text-xl">
				<div className="flex justify-center items-center border rounded-full h-15 w-15 font-semibold">
					<p> </p>
				</div>
				<div className="w-48 p-4 border border-gray-300 rounded-md">
					<p>Inspiration</p>
				</div>
			</div>
			{/* Proficiency Bonus */}
			<div className="flex gap-2 items-center text-xl">
				<div className="flex justify-center items-center border rounded-full h-15 w-15 text-blue-900 font-semibold">
					{'+'}
					{props.proficiencyBonus}
				</div>
				<div className="w-48 p-4 border border-gray-300 rounded-md">
					<p>Proficiency Bonus</p>
				</div>
			</div>
		</>
	);
};

export default InspoProfCard;
