import { GameState } from "../models/state.model";
import { Character } from '../models/character.model';
import * as Actions from './actions';
import { EventEmitter } from '@angular/core';

class Game implements GameState {
  character: Character = {
    hitPoints: 6, mind: 2, power: 4, agility: 3, experiencePoints: 0
  };
  currentCard: undefined;
  commitAction(actionName: string, payload?: any) {
    Actions[actionName](this, payload);
    this.actionFinished.emit(actionName);
  }

  actionFinished: EventEmitter<string> = new EventEmitter();
}

export const gameState = new Game();

