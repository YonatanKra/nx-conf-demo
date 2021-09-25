import { Component, OnInit } from '@angular/core';
import { FullScreenService } from '../../../shared/services/full-screen.service';
import { AudioService } from '@yonatan/nativescript-audio';
import { Page } from '@nativescript/core';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{
  constructor(private fullScreenService: FullScreenService, private page: Page) {

  }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }
}
