import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '../public/app.config';
import { AppComponent } from '../public/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
