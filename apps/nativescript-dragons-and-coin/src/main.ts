import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app.module';
if (environment.production) {
  enableProdMode();
}

import { themer } from '@nativescript-community/ui-material-core';
import { isIOS } from '@nativescript/core';

if (isIOS) {
  themer.setPrimaryColor('#bff937');
  themer.setAccentColor('#ff8a39');
  themer.setSecondaryColor('#a830d7');
}

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
