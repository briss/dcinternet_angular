import { Component, inject } from '@angular/core';
import { SuscripcionService } from '../service/suscripcion.service';

@Component({
  selector: 'app-pie-de-pagina',
  imports: [],
  templateUrl: './pie-de-pagina.html',
  styleUrl: './pie-de-pagina.css',
  providers: [SuscripcionService]
})
export class PieDePagina {
  protected anio:number = new Date().getFullYear();

  private subscripcionService = inject(SuscripcionService);

  subscribirse(periodicidad:string) {
    this.subscripcionService.suscribir(periodicidad);
  }
}
