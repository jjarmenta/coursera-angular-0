import {Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import { DestinoViaje } from "../models/destino-viaje.model";

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent {
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Input() destination: DestinoViaje;
  @Output() clicked: EventEmitter<DestinoViaje>;

  constructor() {
    this.destination = new DestinoViaje('', '');
    this.clicked = new EventEmitter();
  }

  favorite() {
    this.clicked.emit(this.destination);
    return false;
  }
}
