import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Curso } from '../modelo/curso.modelo';
import { CurrencyPipe, JsonPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FechaPipe } from '../pipe/fecha.pipe';
import { CursoService } from '../service/curso.service';

@Component({
  selector: 'app-lista-cursos',
  imports: [ CurrencyPipe, TitleCasePipe, UpperCasePipe, FechaPipe ],
  templateUrl: './lista-cursos.html',
  styleUrl: './lista-cursos.css'
})
export class ListaCursos implements OnInit, OnChanges {
  cursos:Array<Curso> = [];
  miFecha:Date = new Date();

  private servicio = inject(CursoService);


  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges");
  }

  ngOnInit(): void {
    console.log("OnInit");

    fetch("https://www.dcinternet.com.mx/rino/cursos")
    .then(resultado => {
      return resultado.json();
    })
    .then(res => {
      this.cursos = res;
    })
    .catch(error => {
      console.log(error);
    });
  }
}
