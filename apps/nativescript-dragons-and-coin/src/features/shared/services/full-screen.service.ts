import { Injectable } from '@angular/core';
import { device } from '@nativescript/core/platform';
import { android as androidApp} from '@nativescript/core/application';
declare var android: any;

@Injectable({
  providedIn: 'root'
})
export class FullScreenService {
  public goFullscreen() {
    if (androidApp && device.sdkVersion >= '21') {
      const View = android.view.View;
      const window = androidApp.startActivity.getWindow();
      const decorView = window.getDecorView();
      decorView.setSystemUiVisibility(
        View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
        View.SYSTEM_UI_FLAG_FULLSCREEN |
        View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
      );
    }
  }

  public hideFullscreen() {
    if (androidApp && device.sdkVersion >= '21') {
      const View = android.view.View;
      const window = androidApp.startActivity.getWindow();
      const decorView = window.getDecorView();
      decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
    }
  }
}

