import { Routes } from "@angular/router";
import { Buscador } from "./buscador/buscador";
import { CursoComponente } from "./curso-componente/curso-componente";

export const RUTAS_CURSO:Routes = [
    { path: '', component: Buscador },
    { path: ':id', component: CursoComponente }
];