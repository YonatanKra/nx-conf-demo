import { Component, OnInit } from '@angular/core';
import { FullScreenService } from '../../../shared/services/full-screen.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{
  constructor(private fullScreenService: FullScreenService) {

  }

  ngOnInit(): void {
    this.fullScreenService.goFullscreen();
  }
}
