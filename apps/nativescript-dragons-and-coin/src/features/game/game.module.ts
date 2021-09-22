import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { DragonsAndCoinGameModule } from '@yonatan/dragons-and-coin-game';

export const routes: Routes = [
  {
    path: '',
    component: GameComponent
  }
];

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes), DragonsAndCoinGameModule],
})
export class GameModule { }
