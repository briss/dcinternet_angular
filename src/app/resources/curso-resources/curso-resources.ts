import { Component, computed, inject, input, resource } from '@angular/core';
import { Curso } from '../../modelo/curso.modelo';
import { rxResource } from '@angular/core/rxjs-interop';
import { CursoService } from '../../service/curso.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-curso-resources',
  imports: [RouterLink],
  templateUrl: './curso-resources.html',
  styleUrl: './curso-resources.css'
})
export class CursoResources {
  filtro = input.required<string>();

  cursosFiltro = computed(() => {
    const filtroMin = this.filtro().toLowerCase();
    let cursos = this.cursosRxResource.value()??[];

    return cursos
      .filter((curso) => curso.nombre.toLowerCase().includes(filtroMin));
  });

  protected cursosEmpty = [];

  private cursoService = inject(CursoService);

  cursosRxResource = rxResource({
    stream: () => this.cursoService.getCursosObservable(),
    defaultValue: []
  });

//  cursosResource = resource({
//    loader: () => fetch("https://www.dcinternet.com.mx/rino/cursos")
//  });


  borrarCurso(idCurso:number) {
    let respuesta = confirm("Estas seguro que quieres borrar el curso con id " + idCurso);
    if (respuesta) {
      this.cursoService.borrarCurso(idCurso);
      this.cursosRxResource.reload();
    }
  }

  editarCurso(curso:Curso) {
    console.log(curso);
  }
}
