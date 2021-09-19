import { GameCardAction } from "./action.model";

export interface Card {
  abundance: number;
  name: string;
  description: string;
  image?: string;
  actions?: GameCardAction[];
  pointsValue: number;
}

export interface MonsterCard extends Card {
  power: number;
  mind: number;
  agility: number;
}
