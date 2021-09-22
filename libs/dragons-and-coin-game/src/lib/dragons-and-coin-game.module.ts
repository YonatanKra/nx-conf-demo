import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { CardComponent } from './components/card/card.component';
import { NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptRouterModule, } from '@nativescript/angular';
import {ActionsComponent} from './components/actions/actions.component'
import { AudioModule } from './audio/audio.module';
import { NativeScriptMaterialButtonModule } from '@nativescript-community/ui-material-button/angular';

@NgModule({
  declarations: [GameBoardComponent, CardComponent, ActionsComponent],
  exports: [GameBoardComponent],
  imports: [
    CommonModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    AudioModule,
    NativeScriptMaterialButtonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DragonsAndCoinGameModule { }
