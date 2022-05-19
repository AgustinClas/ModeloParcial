import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ListadoActoresService } from 'src/app/servicios/listado-actores.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  @Output() actorsSeleccionado: EventEmitter<any>= new EventEmitter<any>(); 
  actores;


  constructor(public serviceActores:ListadoActoresService) {
      this.actores = serviceActores.listadoActores;
      console.log(this.actores);
   }

  ngOnInit(): void {
  }

  ElegirActor(actor:any){
    this.actorsSeleccionado.emit(actor);
  }
}
