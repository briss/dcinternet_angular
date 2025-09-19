import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PieDePagina } from "../pie-de-pagina/pie-de-pagina";

@Component({
  selector: 'app-menu',
  imports: [RouterOutlet, RouterLink, PieDePagina],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

}
