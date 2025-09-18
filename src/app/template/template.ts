import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [FormsModule],
  templateUrl: './template.html',
  styleUrl: './template.css'
})
export class Template {
  protected mensaje = 'Hola Mundo';
  protected contador:number = 1;
  protected habilitado = true;
  protected loading:boolean = true;
  protected esVerde:boolean = true;
  protected usuario = 'Briseida';
  protected twoWayUsuario = 'B';

  prenderApagar() {
    this.loading = !this.loading;
  }

  keyup(evento:Event) {
    console.log(evento);
  }

  capturaUsuario(nombreUsuario:HTMLInputElement) {
    console.log(nombreUsuario.value);
  }

  actualizaUsuario(otroUsuario:HTMLInputElement) {
    this.usuario = otroUsuario.value;
    console.log(this.usuario);
  }
}
