export interface AbilityScore {
	id: string;
	ruName: string;
	value: number;
}

type Equipment = {
	id: string;
	goldValue: number;
};

export interface Background {
	id: string;
	ability: AbilityScore[];
	feat: string;
	skill: string[];
	tool: string;
	equipment: Equipment;
}
