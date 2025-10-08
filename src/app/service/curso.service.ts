import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from "@angular/core";
import { Curso } from "../modelo/curso.modelo";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CursoService {

    private cursosUrl = "https://www.dcinternet.com.mx/rino/cursos";
    private httpClient = inject(HttpClient);

    async getCursos():Promise<Curso[]> {
        let cursos;
        try {
            let resultado = await fetch(this.cursosUrl);
            cursos = await resultado.json();
        } catch(error) {
            console.log(error);
        }

        return cursos;
    }

    getCursosObservable():Observable<Curso[]> {
        return this.httpClient.get<Curso[]>(this.cursosUrl);
    }
}