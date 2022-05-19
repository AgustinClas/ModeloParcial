import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { AltaActoresComponent } from './page/alta-actores/alta-actores.component';
import { AltaPeliculaComponent } from './page/alta-pelicula/alta-pelicula.component';

const routes: Routes = [
  {path: '', redirectTo: 'busqueda', pathMatch: 'full'},
  {path:'busqueda', component:BusquedaComponent},
  {path:'peliculas/alta', component:AltaPeliculaComponent},
  {path:'actor/alta', component:AltaActoresComponent},
  {path:'peliculas/listado', component:PeliculaListadoComponent},
  {path: '**', component:BusquedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
