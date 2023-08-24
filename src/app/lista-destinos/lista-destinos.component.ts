import { Component } from '@angular/core';
import { DestinoViaje } from "../models/destino-viaje.model";

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent {
  destinations: DestinoViaje[];

  constructor() {
    this.destinations = [];
  }

  save(name:string, url:string): boolean {
    this.destinations.push(new DestinoViaje(name, url));
    return false;
  }
}
