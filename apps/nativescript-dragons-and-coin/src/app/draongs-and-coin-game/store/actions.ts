import { Card, MonsterCard } from '../models/card.model';
import { GameState } from '../models/state.model';

function getDiceResult() {
  return Math.floor(Math.random() * 5 + 1);
}

export function FIGHT(gameState: GameState, monster: MonsterCard = gameState.currentCard as MonsterCard) {
  const userPower = gameState.character.power + getDiceResult();
  const monsterPower = monster.power + getDiceResult();
  console.log(`${userPower} || ${monsterPower}`);
  if (userPower < monsterPower) {
    const newCharacterState = {...gameState.character};
    newCharacterState.hitPoints -= 1;
    gameState.character = newCharacterState;
    console.log('Defeated!');
  }
  if (userPower > monsterPower) {
    const newCharacterState = {...gameState.character};
    newCharacterState.experiencePoints += monster.pointsValue;
    gameState.character = newCharacterState;
    console.log('Won!');
  }
}

export function RUN(monster: MonsterCard) {

}

export function NEXT_CARD(gameState: GameState, nextCard: Card | MonsterCard) {
  const newCard = Object.assign({}, nextCard);
  gameState.currentCard = newCard;
}
