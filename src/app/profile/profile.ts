import { Component } from '@angular/core';
import { Alumno } from '../modelo/alumno.modelo';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
//  protected nombre = 'Briseida';
//  protected correo = 'briseidags';
//  protected imagen:string|undefined;
  protected alumno:Alumno = new Alumno('Briseidas', 'briseidags', 'https://randomuser.me/api/portraits/women/2.jpg');
}
