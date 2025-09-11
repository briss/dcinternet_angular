import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Template } from './app/template/template';

bootstrapApplication(Template, appConfig)
  .catch((err) => console.error(err));
