import { Component } from '@angular/core';
import { Alumno } from '../modelo/alumno.modelo';
import { Persona } from '../modelo/persona.modelo';
import { Card } from "../card/card";
import { Avatar } from "../avatar/avatar";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [Card, Avatar, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
//  protected nombre = 'Briseida';
//  protected correo = 'briseidags';
//  protected imagen:string|undefined;
  protected alumno:Alumno = new Alumno('Briseidas', 'briseidags', 'https://randomuser.me/api/portraits/women/2.jpg');
  protected persona:Persona = {
    nombre: 'Katsuko Saruhashi',
    imagenId: 'YfeOqp2'
  };
  protected mensajeHijo:string|undefined;
  protected foto_tamanio = 100;


  recibirMensaje(event:string) {
    this.mensajeHijo = event;
  }
}
