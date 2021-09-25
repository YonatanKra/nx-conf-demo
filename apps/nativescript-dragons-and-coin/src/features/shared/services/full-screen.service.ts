import { Injectable } from '@angular/core';
import { isIOS, isAndroid } from '@nativescript/core';
import { android as androidApp} from '@nativescript/core/application';

declare var android: any;

function iosProperty(theClass, theProperty) {
  if (typeof theProperty === "function") {
    // xCode 7 and below
    return theProperty.call(theClass);
  } else {
    // xCode 8+
    return theProperty;
  }
}

function androidFullScreen() {
  const androidPlatform = androidApp.startActivity;
  const View = android.view.View;
  androidPlatform.getWindow().getDecorView().setSystemUiVisibility(
    View.SYSTEM_UI_FLAG_VISIBLE |
    View.SYSTEM_UI_FLAG_LAYOUT_STABLE
    | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
    | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
    | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
    | View.SYSTEM_UI_FLAG_FULLSCREEN
    | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
}

function exitFullScreenInAndroid() {
  const androidPlatform = androidApp.startActivity;
  const window = androidPlatform.getWindow();
  window.clearFlags(android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN);
  window.getDecorView().setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
}

@Injectable({
  providedIn: 'root'
})
export class FullScreenService {

  public goFullscreen() {
    if (isIOS) {
      UIApplication.sharedApplication.setStatusBarHiddenWithAnimation(true, 2);
    }
    if (isAndroid) {
      androidFullScreen();
    }
  }

  public exitFullScreen() {
    if (isIOS) {
      const app = iosProperty(UIApplication, UIApplication.sharedApplication);
      app.setStatusBarHiddenWithAnimation(false, 2);
    }
    if (isAndroid) {
      exitFullScreenInAndroid();
    }
  }
}
