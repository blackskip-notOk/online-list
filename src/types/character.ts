import type { Background } from './background';

export interface Character {
	level: number;
	experience: number;
	class: string;
	background: Background | null;
}
