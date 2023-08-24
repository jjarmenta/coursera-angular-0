import {Component, HostBinding, Input} from '@angular/core';
import { DestinoViaje } from "../models/destino-viaje.model";

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent {
  @HostBinding('attr.class') cssClass = 'col-md-4';

  @Input() destination: DestinoViaje;

  constructor() {
    this.destination = new DestinoViaje('', '');
  }
}
