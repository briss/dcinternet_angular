import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  imports: [],
  templateUrl: './template.html',
  styleUrl: './template.css'
})
export class Template {
  protected mensaje = 'Hola Mundo';
  protected contador:number = 1;
  protected habilitado = true;
  protected loading:boolean = true;
  protected esVerde:boolean = true;

  prenderApagar() {
    this.loading = !this.loading;
  }
}
