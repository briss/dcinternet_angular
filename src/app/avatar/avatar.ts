import { Component, input, Input } from '@angular/core';
import { Persona } from '../modelo/persona.modelo';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css'
})
export class Avatar {
  @Input()
  persona:Persona = {
    nombre: 'Briseida',
    imagenId: 'YfeOqp2'
  };
  imagen:string = obtieneImagenUrl(this.persona);
  //@Input() 
  tamanio = input<number>();
}


function obtieneImagenUrl(persona:Persona, size:string = 's'):string {
  return 'https://imgur.com/' + persona.imagenId + size + '.jpg';
}
