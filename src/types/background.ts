interface AbilityScore {
	id: string;
	value: number;
}

type Equipment = {
	id: string;
	goldValue: number;
};

export interface Background {
	ability: AbilityScore[];
	feat: string;
	skill: string[];
	tool: string;
	equipment: Equipment;
}
