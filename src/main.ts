import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export default {
  boot() {
    return platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  }
};

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
