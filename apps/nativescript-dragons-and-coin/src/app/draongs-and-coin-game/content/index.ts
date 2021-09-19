import { Card, MonsterCard } from '../models/card.model';
import { MONSTERS } from './monsters';

function shuffleCards(cards) {
  const tmpArray = Array.from(cards);
  const scrambledArray = new Array(cards.length).fill(1);
  let index = 0;
  while (tmpArray.length) {
    const randomIndex = Math.floor(Math.random() * (tmpArray.length - 1));
    scrambledArray[index++] = tmpArray.splice(randomIndex, 1)[0];
  }
  return scrambledArray;
}

export const Cards: (Card | MonsterCard)[] = [
  ...MONSTERS
];

export function getPlayCards() {
  return shuffleCards(Cards.flatMap((card) => {
    return new Array(card.abundance).fill(1).map(() => {
      return Object.assign({}, card);
    });
  }));
}

