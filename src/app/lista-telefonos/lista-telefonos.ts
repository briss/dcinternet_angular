import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-telefonos',
  imports: [],
  templateUrl: './lista-telefonos.html',
  styleUrl: './lista-telefonos.css'
})
export class ListaTelefonos {
  protected telefonos = [
    "te1",
    "tel2",
    "tel3"
  ];
}
