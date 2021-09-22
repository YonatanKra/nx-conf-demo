import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptRouterModule } from '@nativescript/angular';
import { DragonsAndCoinGameModule } from '@yonatan/dragons-and-coin-game';

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
