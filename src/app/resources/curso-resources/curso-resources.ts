import { Component, computed, inject, input, resource } from '@angular/core';
import { Curso } from '../../modelo/curso.modelo';
import { rxResource } from '@angular/core/rxjs-interop';
import { CursoService } from '../../service/curso.service';

@Component({
  selector: 'app-curso-resources',
  imports: [],
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


}
