import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from "@angular/forms";
import { Curso } from '../modelo/curso.modelo';
import { CursoService } from '../service/curso.service';

@Component({
  selector: 'app-registro-curso-template',
  imports: [FormsModule],
  templateUrl: './registro-curso-template.html',
  styleUrl: './registro-curso-template.css'
})
export class RegistroCursoTemplate implements OnInit {

  cursoService = inject(CursoService);


  registrar(event:any, formRegistrar:NgForm) {
//    event.preventDefault();
//    console.log("Registrando curso");
//    console.log(event.target.nombre.value);

//    console.log(formRegistrar);
//    console.log(formRegistrar.value.nombre);
//    console.log(formRegistrar.value);

    let curso:Curso = formRegistrar.value;
    console.log(curso);

    if (this.cursoService.cursoActual().id !== 0) {
      console.log("Actualizando");
      this.cursoService.actualizar(curso);
    } else {
      console.log("Registrando")
      this.cursoService.registrar({
        "nombre": curso.nombre,
        "categoria": curso.categoria,
        "duracion": curso.duracion,
        "descripcion": curso.descripcion,
        "imagen": curso.imagen
      });
    }
  }

  obtieneValor(nombre:NgModel) {
    console.log(nombre);
  }

  ngOnInit(): void {
  }

  actualizar(id:string, nombre:string, categoria:string, duracion:string, descripcion:string, imagen:string) {
    console.log("" + id + ", " + nombre);
      this.cursoService.actualizar({
        "id": Number(id),
        "nombre": nombre,
        "categoria": categoria,
        "duracion": Number(duracion),
        "descripcion": descripcion,
        "imagen": imagen
      });
  }

  registrarSinNgModel(nombre:string, categoria:string, duracion:string, descripcion:string, imagen:string) {
    console.log("Entrando a registrarSinNgModel")
      this.cursoService.registrar({
        "nombre": nombre,
        "categoria": categoria,
        "duracion": Number(duracion),
        "descripcion": descripcion,
        "imagen": imagen
      });
  }
}
