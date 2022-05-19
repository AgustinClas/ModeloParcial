import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/Entidades/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  pelicula?:Pelicula;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(pelicula: Pelicula) {
    this.pelicula = pelicula
  }

}
