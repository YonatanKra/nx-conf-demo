import { MonsterCard } from '../models/card.model';
import { GameCardAction } from '../models/action.model';

class Monster implements MonsterCard {

  abundance: number;
  actions: GameCardAction[] = [{ name: 'FIGHT', displayName: 'Fight' }, { name: 'RUN', displayName: 'Run'}];
  agility: number;
  description: string;
  image: string;
  mind: number;
  name: string;
  pointsValue: number;
  power: number;

  constructor(monsterData: MonsterCard) {
    Object.assign(this, monsterData);
  }
}

const GOBLIN: MonsterCard = {
  name: "Goblin",
  description: "A goblin appears in front of you.  It is an evil creature and attacks you with hate in its eyes.",
  power: 5,
  agility: 4,
  mind: 1,
  pointsValue: 5,
  abundance: 50,
  image: '~/assets/images/monsters/goblin.png',
};

const DRAGON: MonsterCard = {
  name: "Dragon",
  description: "A huge fire breathing reptile has decided to make lunch out of you. It is time to fight!",
  power: 20,
  agility: 10,
  mind: 20,
  pointsValue: 250,
  abundance: 2,
  image: '~/assets/images/monsters/dragon.png',
};

const GIANT_RAT: MonsterCard = {
  name: "Giant Rat",
  description: "A giant rat is about.  You and your equipment seem like a good source of food. Prepare to fight!",
  power: 2,
  agility: 10,
  mind: 1,
  pointsValue: 3,
  abundance: 50,
  image: '~/assets/images/monsters/giant-rat.png',
};

const OGRE: MonsterCard = {
  name: "Ogre",
  description: "A big ogre attacks you with a cudgel",
  power: 7,
  agility: 10,
  mind: 5,
  pointsValue: 30,
  abundance: 5,
  image: '~/assets/images/monsters/Ogre.png',
};

const WOLF: MonsterCard = {
  name: "Wolf",
  description: "A wolf emerges from the darkness and leaps at you",
  power: 3,
  agility: 12,
  mind: 7,
  pointsValue: 15,
  abundance: 50,
  image: '~/assets/images/monsters/wolf.png',
};

const GIANT_CROW: MonsterCard = {
  name: "Giant Crow",
  description: "A giant crow tries to pick at you.",
  power: 3,
  agility: 12,
  mind: 7,
  pointsValue: 30,
  abundance: 50,
  image: '~/assets/images/monsters/giant-crow.png',
};

export const MONSTERS = [
  new Monster(GOBLIN),
  new Monster(DRAGON),
  new Monster(GIANT_RAT),
  new Monster(OGRE),
  new Monster(WOLF),
  new Monster(GIANT_CROW),
];
