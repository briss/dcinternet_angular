import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PieDePagina } from "../pie-de-pagina/pie-de-pagina";

@Component({
  selector: 'app-menu',
  imports: [RouterOutlet, RouterLink, PieDePagina, RouterLinkActive],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

}
