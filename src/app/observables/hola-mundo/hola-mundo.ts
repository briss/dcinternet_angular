import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';

@Component({
  selector: 'app-hola-mundo',
  imports: [ AsyncPipe ],
  templateUrl: './hola-mundo.html',
  styleUrl: './hola-mundo.css'
})
export class HolaMundo {

  numeros$ = of(1, 2, 3, 4, 5, 6);
  observable$ = new Observable((suscriber) => {
    setTimeout(() => {
      suscriber.next(["java", "javascript", "typescript"]);
    }, 7000);
    setTimeout(() => {
      suscriber.next(["spring", "docker", "angular"]);
    }, 2000);
    setTimeout(() => {
      suscriber.next(["react", "sqlserver", "linux"]);
    }, 1000);

    setTimeout(() => {
      suscriber.complete();
    }, 8000);
  })
  suscripcion:any;

  obtenerCursos() {
    this.suscripcion = this.observable$.subscribe({
      next: (valor) => console.log("valor: " + valor),
      error: (error) => console.log("Error: " + error),
      complete: () => console.log("Completo")
    });
  }

  terminarSuscripcion() {
    this.suscripcion.unsubscribe();
  }
}
