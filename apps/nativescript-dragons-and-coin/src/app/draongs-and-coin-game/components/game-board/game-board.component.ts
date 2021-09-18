import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'GameBoard',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  ngOnInit(): void {
    console.log('Here');
  }

}
