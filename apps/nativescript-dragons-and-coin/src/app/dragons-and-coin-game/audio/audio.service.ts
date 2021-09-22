import { Injectable } from '@angular/core';
import { TNSPlayer } from 'nativescript-audio';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private player: TNSPlayer;

  constructor() {
    this.player = new TNSPlayer();
  }

  async play(filePath: string) {
    return this.player.playFromFile({
      audioFile: filePath,
      loop: false
    })
  }
}
