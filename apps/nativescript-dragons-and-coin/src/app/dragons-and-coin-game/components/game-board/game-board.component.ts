import { Component, OnInit } from '@angular/core';
import { gameState } from '../../store/state';
import { GameState } from '../../models/state.model';
import { generatePlayCards } from '../../content';

function isCardActive(currentCard) {
  return currentCard && currentCard.cardState === "ACTIVE";
}

@Component({
  selector: 'GameBoard',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit{
  gameState: GameState = gameState;

  get endGame(): boolean {
    return this.gameState.character.hitPoints <= 0;
  }

  get hitPoints() {
    return 'Hit Points: ' + this.gameState.character.hitPoints
  }

  get power() {
    return 'Power: ' + this.gameState.character.power;
  }

  get points() {
    return 'Points: ' + this.gameState.character.experiencePoints;
  }

  refillDeck() {
    gameState.commitAction('SET_NEW_DECK', {deck: generatePlayCards()});
  }

  ngOnInit(): void {
    this.refillDeck();
    gameState.commitAction('NEXT_CARD');

    // Handle cards swap
    gameState.actionFinished.subscribe((actionName: string) => {
      if (actionName === 'NEXT_CARD' || isCardActive(this.gameState.currentCard)) return;

      if (this.gameState.deck.length === 0) {
        this.refillDeck();
      }
      gameState.commitAction('NEXT_CARD');
    });

    // Handle RUN
    gameState.actionFinished.subscribe((actionName: string) => {
      if (actionName === 'RUN' && isCardActive(this.gameState.currentCard)) {
        gameState.commitAction('FIGHT');
      }
    });

    // handle hitpoints zero
    gameState.actionFinished.subscribe((actionName: string) => {
      if (actionName !== 'END_GAME' && gameState.character.hitPoints === 0) {
        gameState.commitAction('END_GAME');
      }
    });
  }
}
