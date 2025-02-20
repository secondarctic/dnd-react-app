import Input from '../Input';
import Button from '../Button';

const updateAbilityScoreForm = (props) => {
	return (
		<>
			<div className="flex flex-col p-4 gap-2 h-min w-min border border-gray-300 rounded-md">
				<p>{props.title}:</p>
				<form
					className="flex flex-col justify-start p-2 gap-2"
					onSubmit={props.handleSubmit}
				>
					<Input
						id="strength"
						type="number"
						name="strength"
						placeholder="strength"
						handleChange={props.handleChange}
					/>
					<Input
						id="dexterity"
						type="number"
						name="dexterity"
						placeholder="dexterity"
						handleChange={props.handleChange}
					/>
					<Input
						id="constitution"
						type="number"
						name="constitution"
						placeholder="constitution"
						handleChange={props.handleChange}
					/>
					<Input
						id="intelligence"
						type="number"
						name="intelligence"
						placeholder="intelligence"
						handleChange={props.handleChange}
					/>
					<Input
						id="wisdom"
						type="number"
						name="wisdom"
						placeholder="wisdom"
						handleChange={props.handleChange}
					/>
					<Input
						id="charisma"
						type="number"
						name="charisma"
						placeholder="charisma"
						handleChange={props.handleChange}
					/>
					<Button type="submit" text="Update" />
				</form>
			</div>
		</>
	);
};

export default updateAbilityScoreForm;
