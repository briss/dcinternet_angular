import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CursoService } from '../service/curso.service';
import { Curso } from '../modelo/curso.modelo';

@Component({
  selector: 'app-registro-curso-reactivo',
  imports: [ReactiveFormsModule],
  templateUrl: './registro-curso-reactivo.html',
  styleUrl: './registro-curso-reactivo.css'
})
export class RegistroCursoReactivo implements OnInit {

  forma:FormGroup = new FormGroup({
    nombre: new FormControl("", [
      Validators.required, 
      Validators.minLength(4),
      Validators.pattern("[a-zA-Z ]+")
    ]),
    categoria: new FormControl(),
    duracion: new FormControl(32, [
      Validators.required,
      Validators.min(10)
    ]),
    descripcion: new FormControl(),
    imagen: new FormControl()
  });

  nombreError = "";
  duracionError = "";

  cursoService = inject(CursoService);


  constructor() {
  }

  ngOnInit(): void {
    const controlNombre = this.forma.get("nombre");
    controlNombre?.valueChanges.subscribe((valor) => {
        this.nombreError = this.validarControl(controlNombre as FormControl, "nombre");
    });
    const controlDuracion = this.forma.get("duracion");
    controlDuracion?.valueChanges.subscribe((valor) => {
      this.duracionError = this.validarControl(controlDuracion as FormControl, "duracion");
    })
  }

  enviar() {
    console.log("Enviando");

    let curso:Curso = this.forma.value;

    if (this.cursoService.cursoActual().id !== 0) {
      curso.id = this.cursoService.cursoActual().id;
      console.log(curso);
      this.cursoService.actualizar(curso);
    } else {
      this.cursoService.registrar(curso);
    }
  }

  validarControl(control:FormControl, nombreControl:string):string {
    let mensajeError = "";
    if (control?.invalid) {
      if (control?.errors?.['minlength']) {
        mensajeError = nombreControl + " Longitud mínima es 4";
      } else if (control?.errors?.['required']) {
        mensajeError = nombreControl + " requerido";
      } else if (control?.errors?.['pattern']) {
        mensajeError = nombreControl + " inválido";
      } else if (control?.errors?.['min']) {
        mensajeError = nombreControl + " mínima es 10";
      }
    }

    return mensajeError;
  }
}
