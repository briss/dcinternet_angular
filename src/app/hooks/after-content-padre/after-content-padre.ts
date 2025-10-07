import { Component } from '@angular/core';
import { AfterContentHijo } from "../after-content-hijo/after-content-hijo";

@Component({
  selector: 'app-after-content-padre',
  imports: [AfterContentHijo],
  templateUrl: './after-content-padre.html',
  styleUrl: './after-content-padre.css'
})
export class AfterContentPadre {

  contador:number = 1;

  cuenta() {
    this.contador++;
  }
}
