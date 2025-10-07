import { Injectable } from "@angular/core";
import { Curso } from "../modelo/curso.modelo";

@Injectable({
    providedIn: 'root'
})
export class CursoService {

    async getCursos():Promise<Curso[]> {
        let cursos;
        try {
            let resultado = await fetch("https://www.dcinternet.com.mx/rino/cursos");
            cursos = await resultado.json();
        } catch(error) {
            console.log(error);
        }

        return cursos;
    }
}