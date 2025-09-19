import { Routes } from '@angular/router';
import { App } from './app';
import { Profile } from './profile/profile';
import { Avatar } from './avatar/avatar';
import { Card } from './card/card';

export const routes: Routes = [
    { path: 'profile', component: Profile },
    { path: 'inicio', component: App },
    { path: 'card', component: Card },

    { path: '**', redirectTo: 'inicio' }
];
