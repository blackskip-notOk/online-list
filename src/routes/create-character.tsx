import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/create-character')({
	component: CreateCharacter,
});

function CreateCharacter() {
	return <div>Let's create your fucking character!</div>;
}
