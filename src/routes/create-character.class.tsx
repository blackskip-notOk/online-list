import { createFileRoute, Link } from '@tanstack/react-router';
import { useFormContext } from 'react-hook-form';

export const Route = createFileRoute('/create-character/class')({
	component: RouteComponent,
});

const classes = [
	{
		id: 'class-1',
		ruName: 'варвар',
	},
	{
		id: 'class-2',
		ruName: 'волшебник',
	},
];

function RouteComponent() {
	const { register, watch } = useFormContext();

	const classId = watch('class');

	return (
		<main>
			<fieldset>
				<legend>Начнём с выбора класса:</legend>
			</fieldset>

			<ul>
				{classes.map(({ id, ruName }) => {
					return (
						<li key={id}>
							<input {...register('class')} type="radio" id={id} value={id} />
							<label htmlFor={id}>{ruName}</label>
						</li>
					);
				})}
			</ul>
			<Link to="/create-character/background" disabled={!classId}>
				Дальше
			</Link>
		</main>
	);
}
