import Input from '../Input';
import Button from '../Button';

const updateAbilityScoreForm = (props) => {
	const textStyle =
		'w-44 h-8 px-2 border border-gray-400 rounded-sm text-sm text-black-400';
	return (
		<>
			<div className="flex flex-col p-4 gap-2 h-min w-min border border-gray-300 rounded-md">
				<p>{props.title}:</p>
				<form
					className="flex flex-col justify-start p-2 gap-2"
					onSubmit={props.handleSubmit}
				>
					<Input
						style={textStyle}
						id="strength"
						type="number"
						name="strength"
						placeholder="strength"
						handleChange={props.handleChange}
					/>
					<Input
						style={textStyle}
						id="dexterity"
						type="number"
						name="dexterity"
						placeholder="dexterity"
						handleChange={props.handleChange}
					/>
					<Input
						style={textStyle}
						id="constitution"
						type="number"
						name="constitution"
						placeholder="constitution"
						handleChange={props.handleChange}
					/>
					<Input
						style={textStyle}
						id="intelligence"
						type="number"
						name="intelligence"
						placeholder="intelligence"
						handleChange={props.handleChange}
					/>
					<Input
						style={textStyle}
						id="wisdom"
						type="number"
						name="wisdom"
						placeholder="wisdom"
						handleChange={props.handleChange}
					/>
					<Input
						style={textStyle}
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
