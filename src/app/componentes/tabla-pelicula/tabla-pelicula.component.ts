import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Pelicula } from 'src/app/Entidades/pelicula';
import { ListadoPeliculasService } from 'src/app/servicios/listado-peliculas.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

@Input() listadoPeliculas:Pelicula[];
@Output() peliculaSeleccionado: EventEmitter<Pelicula>= new EventEmitter<Pelicula>(); 

  

  constructor(listadoPeliculas:ListadoPeliculasService) { 
    this.listadoPeliculas = listadoPeliculas.listadoPeliculas;
  }

  ngOnInit(): void {
  }

  mostrarDetalles(pelicula:Pelicula){
    this.peliculaSeleccionado.emit(pelicula);
  }
}
