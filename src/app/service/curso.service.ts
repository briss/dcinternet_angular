import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, Signal } from "@angular/core";
import { Curso } from "../modelo/curso.modelo";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CursoService {

    private cursosUrl = "https://www.dcinternet.com.mx/rino/cursos";
    private httpClient = inject(HttpClient);

    private cursoActual = signal<Curso>({
        id: 0,
        nombre: '',
        categoria: '',
        duracion: 0,
        descripcion: '',
        imagen: ''
    });

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

    registrar(curso:Curso) {
        this.httpClient.post(this.cursosUrl, curso)
            .subscribe(() => console.log("Curso registrado"));
    }

    getCurso(id:string):Observable<Curso> {
        return this.httpClient.get<Curso>(this.cursosUrl + '/' + id);
    }

    borrarCurso(id:number):void {
        this.httpClient.delete(this.cursosUrl + '/' + id).subscribe({
            next: (response) => console.log(response)
        });
    }
}