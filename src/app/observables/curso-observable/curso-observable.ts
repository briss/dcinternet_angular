import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../../modelo/curso.modelo';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CursoService } from '../../service/curso.service';

@Component({
  selector: 'app-curso-observable',
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './curso-observable.html',
  styleUrl: './curso-observable.css'
})
export class CursoObservable implements OnInit {
//  private httpClient = inject(HttpClient);
  private cursosService = inject(CursoService);

//  cursos$ = this.httpClient.get<Curso[]>("https://www.dcinternet.com.mx/rino/cursos");
  cursos$ = this.cursosService.getCursosObservable();
  cursoSignal = toSignal(this.cursos$);

  totalCursos:number = 0;

  ngOnInit(): void {
    console.log("CursoObservable.OnInit");

    this.cursosService.getCursosObservable().subscribe(
      (arreglo:Curso[]) => {
        this.totalCursos = arreglo.length;
        console.log("-----> " + this.totalCursos);
    });
  }
}
