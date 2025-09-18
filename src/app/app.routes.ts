import { Routes } from '@angular/router';
import { App } from './app';
import { Profile } from './profile/profile';

export const routes: Routes = [
    { path: 'profile', component: Profile },
    { path: 'inicio', component: App }
];
