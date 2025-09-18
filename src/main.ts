import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Template } from './app/template/template';
import { Menu } from './app/menu/menu';

bootstrapApplication(Menu, appConfig)
  .catch((err) => console.error(err));
