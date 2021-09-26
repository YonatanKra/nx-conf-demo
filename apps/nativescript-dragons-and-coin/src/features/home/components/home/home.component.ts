import { Component, OnInit } from '@angular/core';
import { AudioService } from '@yonatan/nativescript-audio';
import { FullScreenService } from '../../../shared/services/full-screen.service';
import { Page } from '@nativescript/core';

class MenuItem {
  constructor(public name, public route) {
  }
}

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  menuItems = [
    new MenuItem('Start Game', '/game'),
    new MenuItem('Credits', '/credits'),
  ];

  constructor(private audioService: AudioService, private page: Page, private fullScreenService: FullScreenService) {
  }

  async ngOnInit(): Promise<void> {
    await this.audioService.play('~/assets/audio/battle-of-the-dragons-8037.mp3');
    this.page.actionBarHidden = true;
    this.fullScreenService.goFullscreen();
  }
}
