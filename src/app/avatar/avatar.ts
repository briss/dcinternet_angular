import { Component, input, Input, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { Persona } from '../modelo/persona.modelo';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css'
})
export class Avatar implements OnInit, OnChanges {
  @Input()
  persona:Persona = {
    nombre: '',
    imagenId: ''
  };
  imagen:string = '';
  //@Input()
  tamanio = input<number>();

  mensaje = "Mensaje del hijo al padre";
  evento = output<string>();

  constructor() {
    console.log("En el constructor");
    console.log(this.persona.imagenId);
    console.log("c" + this.persona.nombre);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    console.log("---->" + this.persona.imagenId);
    this.imagen = obtieneImagenUrl(this.persona);
    console.log("i ->" + this.persona.nombre);
  }

  enviar() {
    this.evento.emit(this.mensaje);
  }
}


function obtieneImagenUrl(persona:Persona, size:string = 's'):string {
  return 'https://imgur.com/' + persona.imagenId + size + '.jpg';
}
