import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router';
import { CreditsComponent } from './components/credits/credits.component';
import { CREDITS_COMPONENTS } from './components';

export const routes: Routes = [
  {
    path: '',
    component: CreditsComponent
  }
];

@NgModule({
  declarations: [
    ...CREDITS_COMPONENTS
  ],
  imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class CreditsModule{}
