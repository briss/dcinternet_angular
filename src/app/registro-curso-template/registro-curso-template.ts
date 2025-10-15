import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from "@angular/forms";
import { Curso } from '../modelo/curso.modelo';
import { CursoService } from '../service/curso.service';

@Component({
  selector: 'app-registro-curso-template',
  imports: [FormsModule],
  templateUrl: './registro-curso-template.html',
  styleUrl: './registro-curso-template.css'
})
export class RegistroCursoTemplate {

  cursoService = inject(CursoService);


  registrar(event:any, formRegistrar:NgForm) {
//    event.preventDefault();
//    console.log("Registrando curso");
//    console.log(event.target.nombre.value);

//    console.log(formRegistrar);
//    console.log(formRegistrar.value.nombre);
//    console.log(formRegistrar.value);

    let curso:Curso = formRegistrar.value;
    this.cursoService.registrar(curso);
  }

  obtieneValor(nombre:NgModel) {
    console.log(nombre);
  }
}
