import { Component, OnInit } from '@angular/core';
import { AudioService } from '@yonatan/nativescript-audio';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private audioService: AudioService) {
  }

  async ngOnInit(): Promise<void> {
    await this.audioService.play('~/assets/audio/battle-of-the-dragons-8037.mp3');
  }
}
