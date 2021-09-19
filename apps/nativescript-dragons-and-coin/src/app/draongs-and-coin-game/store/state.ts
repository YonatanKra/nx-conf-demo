import { GameState } from "../models/state.model";
import { Card, MonsterCard } from '../models/card.model';
import { Character } from '../models/character.model';
import * as Actions from './actions';
import { EventEmitter } from '@angular/core';

class Game implements GameState {
  character: Character = {
    hitPoints: 6, mind: 2, power: 4, agility: 3, experiencePoints: 0
  };
  currentCard: Card | MonsterCard = {
    abundance: 50,
    name: "Goblin",
    description: "A goblin appears in front of you.  It is an evil creature and attacks you with hate in its eyes.",
    image: '~/assets/images/goblin.png',
    actions: [{ name: 'FIGHT', displayName: 'Fight' }, { name: 'RUN', displayName: 'Run'}],
    pointsValue: 5,
    power: 5
  };

  commitAction(actionName: string, payload?: any) {
    Actions[actionName](this, payload);
    this.actionFinished.emit(actionName);
  }

  actionFinished: EventEmitter<string> = new EventEmitter();
}

export const gameState = new Game();
