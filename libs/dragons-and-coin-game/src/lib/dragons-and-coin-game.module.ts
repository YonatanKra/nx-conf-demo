import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { CardComponent } from './components/card/card.component';
import { NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptRouterModule, } from '@nativescript/angular';
import {ActionsComponent} from './components/actions/actions.component'
import { NativescriptAudioModule } from '@yonatan/nativescript-audio';
@NgModule({
  declarations: [GameBoardComponent, CardComponent, ActionsComponent],
  exports: [GameBoardComponent],
  imports: [
    CommonModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativescriptAudioModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DragonsAndCoinGameModule { }
