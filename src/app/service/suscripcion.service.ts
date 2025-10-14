import { Injectable } from '@angular/core';

@Injectable()
export class SuscripcionService {
  
  constructor() {
    console.log("[SuscripcionService.constructor]");
  }

  suscribir(periodicidad:string, cantidad?:number) {
    if (cantidad) {
      console.log(`Se solicitaron ${cantidad} suscripciones`);
    } else {
      cantidad = 1;
    }

    alert(`Gracias por tu suscripción ${periodicidad}: ${cantidad} suscripciones contratadas`)
  }
}
