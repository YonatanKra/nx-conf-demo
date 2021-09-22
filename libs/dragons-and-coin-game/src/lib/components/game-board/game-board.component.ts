import { Component, OnInit } from '@angular/core';
import { gameState } from '../../store/state';
import { GameState } from '../../models/state.model';
import { generatePlayCards } from '../../content';
import { AudioService } from '../../audio/audio.service';

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

  constructor(private audioService: AudioService) {
  }

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
    this.gameState.commitAction('SET_NEW_DECK', {deck: generatePlayCards()});
  }

  restart() {
    this.gameState.commitAction('SET_NEW_DECK', {deck: generatePlayCards()});
    this.gameState.commitAction('RESTART');
    this.gameState.commitAction('NEXT_CARD');
  }

  async ngOnInit(): Promise<void> {
    await this.audioService.play('~/assets/audio/battle-of-the-dragons-8037.mp3');
    this.refillDeck();
    this.gameState.commitAction('NEXT_CARD');

    // Handle cards swap
    gameState.actionFinished.subscribe((actionName: string) => {
      if (actionName === 'NEXT_CARD' ||
        actionName === 'RESTART' ||
        isCardActive(this.gameState.currentCard)) return;

      if (this.gameState.deck?.length === 0) {
        this.refillDeck();
      }
      this.gameState.commitAction('NEXT_CARD');
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
