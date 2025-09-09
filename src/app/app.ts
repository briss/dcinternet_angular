import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly titulo = signal('hola_mundo');
  protected readonly hola = 'Hola';

  protected cursos = [
    { 'nombre': 'Angular', 'link': 'https://www.dcinternet.com.mx/dciCursosdeAngular.jsp' },
    { 'nombre': 'React', 'link': 'https://www.dcinternet.com.mx/dciCursosdeAngular.jsp' },
    { 'nombre': 'JavaScript', 'link': 'https://www.dcinternet.com.mx/dciCursosdeAngular.jsp' },
    { 'nombre': 'TypeScript', 'link': 'https://www.dcinternet.com.mx/dciCursosdeAngular.jsp' }
  ];
}
