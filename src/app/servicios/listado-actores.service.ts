import { Injectable } from '@angular/core';
import { Actor } from '../Entidades/actor';

@Injectable({
  providedIn: 'root'
})
export class ListadoActoresService {

  listadoActores:any = [new Actor(1, "Agustin", "Clas", "HOLLIWOOD", "Agustin@gmail.com",{"imagen": "https://flagcdn.com/bh.svg", "pais": "Bahrein"})];
  proxId = 1;


  constructor() { }
}
