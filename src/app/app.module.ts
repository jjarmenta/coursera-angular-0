import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludadorComponent } from './saludador/saludador.component';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import {NgOptimizedImage} from "@angular/common";
import { DetailDestinationComponent } from './detail-destination/detail-destination.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludadorComponent,
    DestinoViajeComponent,
    ListaDestinosComponent,
    DetailDestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
