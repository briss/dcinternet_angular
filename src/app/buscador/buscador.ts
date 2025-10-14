import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CursoResources } from "../resources/curso-resources/curso-resources";

@Component({
  selector: 'app-buscador',
  imports: [FormsModule, CursoResources],
  templateUrl: './buscador.html',
  styleUrl: './buscador.css'
})
export class Buscador {

  protected terminoBuscado:string = "";


}
