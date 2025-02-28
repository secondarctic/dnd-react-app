import React from 'react';
import Input from '../../generic/Input';
import Button from '../../generic/Button';

const UpdateHitPointsForm = (props) => {
	return (
		<>
			<div className="w-28">
				<form className="flex flex-col" onSubmit={props.handleSubmit}>
					<Input
						style="w-full mb-2 h-6 px-2 border border-gray-400 rounded-sm text-sm text-gray-500"
						id="damage"
						type="number"
						name="damage"
						placeholder="damage"
						handleChange={props.handleChange}
					/>
					<Input
						style="w-full mb-2 h-6 px-2 border border-gray-400 rounded-sm text-sm text-gray-500"
						id="heal"
						type="number"
						name="heal"
						placeholder="heal"
						handleChange={props.handleChange}
					/>
					<Button text="update hp" h="6" w="full" />
				</form>
			</div>
		</>
	);
};

export default UpdateHitPointsForm;
