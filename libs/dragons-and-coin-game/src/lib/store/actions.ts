import { Card, MonsterCard } from '../models/card.model';
import { GameState } from '../models/state.model';
import { Character } from '../models/character.model';

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
    gameState.currentCard = newCurrentCardState;
    console.log('Won!');
  }
}

export function RUN(gameState: GameState, monster: MonsterCard = gameState.currentCard?.card as MonsterCard) {
  const userAgility = gameState.character.agility + getDiceResult();
  const monsterAgility = monster.agility + getDiceResult();

  if (userAgility >= monsterAgility) {
    const newCurrentCardState = {...gameState.currentCard};
    newCurrentCardState.cardState = "INACTIVE";
    gameState.currentCard = newCurrentCardState;
    return console.log("Managed to run away!");
  }
  console.log("Failed to run away - must fight!");
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
  console.log('Character is dead');
}

export function RESTART(gameState: GameState) {
  const restartedData = {
    character: {
      hitPoints: 6, mind: 2, power: 4, agility: 3, experiencePoints: 0
    },
    currentCard: undefined
  };
  
  Object.assign(gameState, restartedData);
  return gameState;
}