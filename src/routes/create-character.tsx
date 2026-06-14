import { DevTool } from '@hookform/devtools';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form';
import type { Character } from '../types/character';

export const Route = createFileRoute('/create-character')({
	component: CreateCharacterLayout,
});

function CreateCharacterLayout() {
	const methods = useForm<Character>({
		defaultValues: {
			level: 1,
			experience: 0,
			class: '',
			background: null,
		},
	});

	const { handleSubmit, control } = methods;

	const onSubmit: SubmitHandler<Character> = (data) => {
		console.log({ data });
	};

	return (
		<main>
			Let's create your fucking character!
			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(onSubmit)}></form>
				<Outlet />
			</FormProvider>
			<DevTool control={control} />
		</main>
	);
}
