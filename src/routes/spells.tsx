import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/spells')({
	component: About,
});

function About() {
	return <div>Hello from About!</div>;
}
