import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Output() paisSeleccionado: EventEmitter<any>= new EventEmitter<any>(); 

  constructor(private http:HttpClient) { }

  listadoPaises:any = this.ObtenerPaises();

  ngOnInit(): void {

  }

  ObtenerPaises(){ 
  let listaPaises:any = [];
  this.http.get('https://restcountries.com/v3.1/all').subscribe((listadoPaisesAux:any) => {
    let contador = 0;

    listadoPaisesAux.map((auxPais:any)=>{
      let newPais = { 
        pais : auxPais.translations.spa.common,
        imagen : auxPais.flags.svg
      }
      
      if(newPais.imagen != undefined && contador < 7){
        listaPaises.push(newPais)
        contador++;
      }

    })

    return listaPaises;

  }) 
  return listaPaises;
  };

  ElegirPais(pais:any){
    this.paisSeleccionado.emit(pais);
  }

}
