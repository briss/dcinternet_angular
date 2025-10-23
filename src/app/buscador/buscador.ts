import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CursoResources } from "../resources/curso-resources/curso-resources";
import { RegistroCursoTemplate } from "../registro-curso-template/registro-curso-template";
import { RegistroCursoReactivo } from "../registro-curso-reactivo/registro-curso-reactivo";

@Component({
  selector: 'app-buscador',
  imports: [FormsModule, CursoResources, RegistroCursoTemplate, RegistroCursoReactivo],
  templateUrl: './buscador.html',
  styleUrl: './buscador.css'
})
export class Buscador {

  protected terminoBuscado:string = "";


}
