import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  protected nombre = 'Briseida';
  protected correo = 'briseidags';
  protected imagen:string|undefined;
}
