import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptRouterModule } from '@nativescript/angular';
import { DragonsAndCoinGameModule } from '../../app/dragons-and-coin-game/dragons-and-coin-game.module';

const MODULES = [
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptRouterModule,
  DragonsAndCoinGameModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {}
