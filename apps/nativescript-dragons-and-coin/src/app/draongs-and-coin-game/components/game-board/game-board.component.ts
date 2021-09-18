import { Component, OnInit } from '@angular/core';
import { gameState } from '../../store/state';
import { GameState } from '../../models/state.model';

@Component({
  selector: 'GameBoard',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit{

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
      console.log(`${actionName} has Finished!`)
      console.log(`Character: ${JSON.stringify(this.gameState.character)}`);
    });
  }


}
