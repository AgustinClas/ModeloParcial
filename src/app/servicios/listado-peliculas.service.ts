import { Injectable } from '@angular/core';
import { Pelicula } from '../Entidades/pelicula';

@Injectable({
  providedIn: 'root'
})
export class ListadoPeliculasService {


  listadoPeliculas:any = [new Pelicula(1, "Titanic", "Terror", "10-10-2022", 1, "../../../favicon.pgn"),
  new Pelicula(2, "Bañeros", "Comedia", "10-11-2022", 2, "../../../favicon.pgn"),
  new Pelicula(3, "END GAME", "Accion", "10-12-2022", 3, "../../../favicon.pgn"),
  new Pelicula(4, "Toy Story", "Infantil", "10-13-2022", 4, "../../../favicon.pgn")]

  constructor() { }
}
