import { AsyncPipe, CurrencyPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { Curso } from '../modelo/curso.modelo';
import { CursoService } from '../service/curso.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-curso-componente',
  imports: [UpperCasePipe, TitleCasePipe, CurrencyPipe, AsyncPipe],
  templateUrl: './curso-componente.html',
  styleUrl: './curso-componente.css'
})
export class CursoComponente implements OnInit {
  id = input.required<string>();

  cursoService = inject(CursoService);

  curso$!:Observable<Curso>;


  ngOnInit(): void {
    console.log(this.id());

    this.curso$ = this.cursoService.getCurso(this.id());
  }
}
