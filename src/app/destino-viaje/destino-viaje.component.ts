import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent {
  //@Input() name = '';

  @Input() name: string;
  constructor() {
    this.name = '';
  }
}
