import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../public/app.component';
import { config } from '../public/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
