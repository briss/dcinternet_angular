import { Routes } from '@angular/router';
import { App } from './app';
import { Profile } from './profile/profile';
import { Avatar } from './avatar/avatar';
import { Card } from './card/card';
import { ListaCursos } from './lista-cursos/lista-cursos';
import { AfterContentPadre } from './hooks/after-content-padre/after-content-padre';
import { HolaMundo } from './observables/hola-mundo/hola-mundo';

export const routes: Routes = [
    { path: 'profile', component: Profile },
    { path: 'cursos', component: ListaCursos },
    { path: 'inicio', component: App },
    { path: 'card', component: Card },
    { path: 'afterPadre', component: AfterContentPadre },
    { path: 'observables', component: HolaMundo },

    { path: '**', redirectTo: 'inicio' }
];
