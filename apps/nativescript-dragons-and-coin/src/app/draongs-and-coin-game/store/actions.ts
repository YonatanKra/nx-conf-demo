import { Card, MonsterCard } from '../models/card.model';
import { GameState } from '../models/state.model';

function getDiceResult() {
  return Math.floor(Math.random() * 5 + 1);
}

export function FIGHT(gameState: GameState, monster: MonsterCard = gameState.currentCard?.card as MonsterCard) {
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
    const newCurrentCardState = {...gameState.currentCard};
    newCurrentCardState.cardState = "INACTIVE";
    newCharacterState.experiencePoints += monster.pointsValue;
    gameState.character = newCharacterState;
    console.log('Won!');
  }
}

export function RUN(monster: MonsterCard) {
  console.log('TODO::Run');
}

export function NEXT_CARD(gameState: GameState) {
  gameState.currentCard = {card: gameState.deck.pop(), cardState: 'ACTIVE'};
  return gameState;
}

export function SET_NEW_DECK(gameState: GameState, { deck }) {
  gameState.deck = deck;
  return gameState;
}

export function END_GAME(gameState: GameState) {
  console.log('TODO::Character is dead');
}
