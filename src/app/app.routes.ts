import { Routes } from '@angular/router';
import { App } from './app';
//import { Profile } from './profile/profile';
import { Avatar } from './avatar/avatar';
import { Card } from './card/card';
import { ListaCursos } from './lista-cursos/lista-cursos';
import { AfterContentPadre } from './hooks/after-content-padre/after-content-padre';
import { HolaMundo } from './observables/hola-mundo/hola-mundo';
import { CursoObservable } from './observables/curso-observable/curso-observable';
import { CursoResources } from './resources/curso-resources/curso-resources';
import { Buscador } from './buscador/buscador';
import { RegistroCursoTemplate } from './registro-curso-template/registro-curso-template';

export const routes: Routes = [
    { path: 'profile', loadComponent: () => import('./profile/profile').then((c) => c.Profile) },
    { path: 'cursos', component: ListaCursos },
    { path: 'cursosObservable', component: CursoObservable },
    { path: 'cursosResources', component: CursoResources },
    { path: 'inicio', component: App },
    { path: 'card', component: Card },
    { path: 'afterPadre', component: AfterContentPadre },
    { path: 'observables', component: HolaMundo },
    { path: 'buscador', loadChildren: () => import('./curso.routes').then((r) => r.RUTAS_CURSO) },
    { path: 'registroTemplate', component: RegistroCursoTemplate },

    { path: '**', redirectTo: 'inicio' }
];
