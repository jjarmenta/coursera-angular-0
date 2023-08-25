import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaDestinosComponent} from "./lista-destinos/lista-destinos.component";
import {DetailDestinationComponent} from "./detail-destination/detail-destination.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ListaDestinosComponent},
  { path: 'detail', component: DetailDestinationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
