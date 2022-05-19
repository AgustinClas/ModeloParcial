import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Actor } from 'src/app/Entidades/actor';
import { ListadoActoresService } from 'src/app/servicios/listado-actores.service';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pelicula } from 'src/app/Entidades/pelicula';
import { ListadoPeliculasService } from 'src/app/servicios/listado-peliculas.service';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {

  pais:any;
  pelicula:Pelicula;
  formValidaciones;
  actoresElegidos:any = [];
  
  constructor( public peliculasService:ListadoPeliculasService) { 
    this.pelicula =  new Pelicula(0, "", "", "", 0,"");
    let fb = new FormBuilder();
    
    this.formValidaciones = fb.group(
      {
        'nombre': ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        'id': ['', [Validators.required, Validators.pattern('[0-9]*')]],
        'tipo': ['', [Validators.required,  Validators.pattern('[a-zA-Z ]*')]],
        'fechaEstreno': ['', [Validators.required]],
        'cantidadPublico': ['', [Validators.required, Validators.pattern('[0-9]*')]],
      }
    );
  }
  
  ngOnInit(): void {
  }
  
  ActorElegido(actor:any){
  
    let flag = true;

    this.actoresElegidos.forEach((actorAux:any) => {
      if(actor.id === actorAux.id) flag = false;
    });

    if(flag)
    this.actoresElegidos.push(actor);
  }

  CargarActor(){
    this.pelicula.nombre = this.formValidaciones.controls['nombre'].value;
    this.pelicula.id = this.formValidaciones.controls['id'].value;
    this.pelicula.tipo = this.formValidaciones.controls['tipo'].value;
    this.pelicula.fechaEstreno = this.formValidaciones.controls['fechaEstreno'].value;
    this.pelicula.cantidadPublico = this.formValidaciones.controls['cantidadPublico'].value;

    this.peliculasService.listadoPeliculas.push(this.pelicula);    

    this.ReiniciarFormulario();
  }

  ReiniciarFormulario(){

    this.formValidaciones.controls['firstName'].setValue('');
    this.formValidaciones.controls['lastName'].setValue('');
    this.formValidaciones.controls['email'].setValue('');
    this.formValidaciones.controls['address'].setValue('');
    this.formValidaciones.controls['country'].setValue('');
    this.pais = {};
  }



}
