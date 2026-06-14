import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import type { Character } from '../types/character';

export const Route = createFileRoute('/create-character/background')({
	component: RouteComponent,
});

const backgrounds = [
	{
		id: 'background-1',
		ruName: 'послушник',
		description:
			'Вы посвятили себя служению в храме, расположенном либо в городе, либо уединенном в священной роще. Там вы совершали священные обряды в честь бога или пантеона. Вы служили у священника и изучали религию. Благодаря наставлениям вашего священника и вашей собственной преданности вы также научились направлять толику божественной силы на служение вашему месту поклонения и людям, которые там молились.',
		abilities: [
			{
				id: 'ability-1',
				ruName: 'интеллект',
			},
			{
				id: 'ability-2',
				ruName: 'мудрость',
			},
			{
				id: 'ability-3',
				ruName: 'харизма',
			},
		],
		feat: {
			id: 'feat-1',
			ruName: 'Посвящённый в магию (Жрец)',
		},
		skills: [
			{
				id: 'skill-1',
				ruName: 'Проницательность',
			},
			{
				id: 'skill-2',
				ruName: 'Религия',
			},
		],
		tool: {
			id: 'tool-1',
			ruName: 'набор для каллиграфии',
		},
		equipment: [
			{
				id: 'equipment-1',
				type: 'A',
				ruName:
					'Набор для каллиграфии, Книга (молитвенник), Священный символ, Пергамент (10 листов), Ряса, 8зм',
				goldValue: 8,
			},
			{
				id: 'equipment-2',
				type: 'B',
				ruName: '50 зм.',
				goldValue: 50,
			},
		],
	},
	{
		id: 'background-2',
		ruName: 'Ремесленник',
		description:
			'Вы начали мыть полы и драить прилавки в мастерской ремесленника за несколько медяков в день, с того момента, как стали достаточно сильным, чтобы нести ведро. Когда вы, наконец, стали достаточно взрослыми, чтобы стать учеником, вы научились создавать свои собственные простые поделки, а также научились умасливать требовательных клиентов. Ваша профессия также привила вам понимание деталей.',
		abilities: [
			{
				id: 'ability-4',
				ruName: 'Сила',
			},
			{
				id: 'ability-5',
				ruName: 'Ловкость',
			},
			{
				id: 'ability-1',
				ruName: 'интеллект',
			},
		],
		feat: {
			id: 'feat-2',
			ruName: 'Ремесленник',
		},
		skills: [
			{
				id: 'skill-3',
				ruName: 'Анализ',
			},
			{
				id: 'skill-4',
				ruName: 'Убеждение',
			},
		],
		tool: {
			id: 'tool-2',
			ruName: 'Ремесленный инструмент',
			type: 'craft',
		},
		equipment: [
			{
				id: 'equipment-3',
				type: 'A',
				ruName:
					'Инструменты ремесленника (выбранный вами выше), 2 мешочка, Одежда путешественника, 32зм',
				goldValue: 32,
			},
			{
				id: 'equipment-2',
				type: 'B',
				ruName: '50 зм',
				value: 50,
			},
		],
	},
];

const craftToolsList = [
	{
		id: 'craft-1',
		ruName: 'Инструменты алхимика',
		characteristic: 'Интеллект',
		type: 'craft',
		price: { gold: 50 },
		description: 'Опознание вещества (Сл 15) или разжигание огня (Сл 15)',
		use: 'Алхимический огонь, Бумага, Духи, Кислота, Масло, Мешочек с компонентами',
	},
	{
		id: 'craft-2',
		ruName: 'Инструменты картографа',
		characteristic: 'Мудрость',
		type: 'craft',
		price: { gold: 15 },
		description: 'Рисование карты небольшой области (Сл 15)',
		use: 'Карта',
	},
];

function RouteComponent() {
	const {
		watch,
		register,
		setValue,
		trigger,
		formState: { errors },
	} = useFormContext<Character>();
	console.log(errors);

	const { fields, replace } = useFieldArray<Character>({
		name: 'background.ability',
		rules: {
			validate: (abilities) => {
				const sum = abilities.reduce(
					(acc, { value }) => acc + Number(value),
					0,
				);

				if (sum !== 3) {
					return 'распредели правильно 3 очка характеристик';
				}

				return sum === 3;
			},
		},
	});

	const backgroundId = watch('background.id');

	const selectedBackGround = backgrounds.find(({ id }) => id === backgroundId);

	useEffect(() => {
		if (backgroundId) {
			const selectedBackGround = backgrounds.find(
				({ id }) => id === backgroundId,
			);

			if (!selectedBackGround) {
				return;
			}

			const abilities = selectedBackGround.abilities.map(({ id, ruName }) => ({
				id,
				ruName,
				value: 0,
			}));

			replace(abilities);
		}
	}, [backgroundId, replace]);

	const handleSetBackground = () => {
		trigger();

		setValue('background.feat', selectedBackGround?.feat.id ?? '');
		setValue(
			'background.skill',
			selectedBackGround?.skills.map(({ id }) => id) ?? [],
		);
	};

	return (
		<main>
			<span>
				Теперь разберемся с предысторией. Предыстория — это набор характеристик,
				которые представляют место и занятие, которые сыграли ключевую роль до
				того, как ваш персонаж отправился на поиски приключений.
			</span>

			<ul>
				{backgrounds.map(({ id, ruName }) => {
					return (
						<li key={id}>
							<input
								{...register('background.id')}
								type="radio"
								id={id}
								value={id}
							/>
							<label htmlFor={id}>{ruName}</label>
						</li>
					);
				})}
			</ul>
			{!!selectedBackGround && (
				<div>
					{selectedBackGround.ruName}
					<span>
						В предыстории перечислены 3 из ваших характеристик персонажа.
						Увеличьте одну из них на 2, а другую на 1; или увеличьте каждую из
						трех на 1.
					</span>
					<ul>
						{fields.map(({ id, ruName }, index) => {
							return (
								<li key={id}>
									<label htmlFor={id}>{ruName} +</label>
									<input
										{...register(`background.ability.${index}.value`)}
										type="number"
										id={id}
										min={0}
										max={2}
									/>
								</li>
							);
						})}
					</ul>
					<span>
						Предыстория дает вам определенную черту из категории происхождения.
					</span>
					<span>{selectedBackGround.feat.ruName}</span>
					<span>
						Предыстория дает вашему персонажу владение двумя определенными
						навыками.
					</span>
					<ul>
						{selectedBackGround.skills.map(({ id, ruName }) => {
							return <li key={id}>{ruName}</li>;
						})}
					</ul>
					<span>
						Каждая предыстория дает персонажу владение одним инструментом.
					</span>
					<div>{selectedBackGround.tool.ruName}</div>
					<div>
						{!!selectedBackGround.tool.type && (
							<select {...register('background.tool', { required: true })}>
								{craftToolsList.map(({ id, ruName }) => {
									return (
										<option key={id} value={id}>
											{ruName}
										</option>
									);
								})}
							</select>
						)}
					</div>
					<span>
						Каждая предыстория предлагает выбор между определенным набором
						снаряжения.
					</span>
					<ul>
						{selectedBackGround.equipment.map(({ id, type, ruName }) => {
							return (
								<li key={id}>
									<input
										{...register('background.equipment.id', { required: true })}
										type="radio"
										id={id}
										value={id}
									/>
									<label htmlFor={id}>
										Тип {type}: {ruName}
									</label>
								</li>
							);
						})}
					</ul>
				</div>
			)}
			{errors.background?.ability?.root?.message && (
				<span>{errors.background?.ability?.root?.message}</span>
			)}
			<Link to="/create-character/class">Назад</Link>
			<button
				type="button"
				disabled={!backgroundId}
				onClick={handleSetBackground}
			>
				Дальше
			</button>
		</main>
	);
}
