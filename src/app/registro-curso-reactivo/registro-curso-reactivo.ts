import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-curso-reactivo',
  imports: [ReactiveFormsModule],
  templateUrl: './registro-curso-reactivo.html',
  styleUrl: './registro-curso-reactivo.css'
})
export class RegistroCursoReactivo {

  forma:FormGroup = new FormGroup({
    nombre: new FormControl(),
    categoria: new FormControl(),
    duracion: new FormControl(32),
    descripcion: new FormControl(),
    imagen: new FormControl()
  });


  constructor() {
  }

  enviar() {
    console.log("Enviando");
    console.log(this.forma);
  }
}
