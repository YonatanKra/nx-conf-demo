import { Component, OnInit } from '@angular/core';
import { gameState } from '../../store/state';
import { GameState } from '../../models/state.model';
import { getPlayCards } from '../../content';

@Component({
  selector: 'GameBoard',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit{
  playCards = getPlayCards(); //TODO::move to the game's state
  gameState: GameState = gameState;
  get hitPoints() {
    return 'Hit Points: ' + this.gameState.character.hitPoints
  }

  get power() {
    return 'Power: ' + this.gameState.character.power;
  }

  get points() {
    return 'Points: ' + this.gameState.character.experiencePoints;
  }

  ngOnInit(): void {
    gameState.actionFinished.subscribe((actionName: string) => {
      if (actionName === 'NEXT_CARD') return;
      gameState.commitAction('NEXT_CARD', this.playCards.pop());
      // TODO::handle hitpoints zero
      // TODO::handle unfinished fight
      // TODO::handle end of cards deck
      // TODO::handle run
    });
  }
}
