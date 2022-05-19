import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Actor } from 'src/app/Entidades/actor';
import { ListadoActoresService } from 'src/app/servicios/listado-actores.service';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent implements OnInit {

  pais:any;
  actor:Actor;
  formValidaciones;
  
  constructor( public actores:ListadoActoresService) { 
    this.actor =  new Actor(this.actores.proxId, "", "", "", "","");
    this.pais = '';
    let fb = new FormBuilder();

    this.formValidaciones = fb.group(
      {
        'firstName': ['', [Validators.required,  Validators.pattern('[a-zA-Z ]*')]],
        'lastName': ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        'email': ['', [Validators.required, Validators.email]],
        'address': ['', [Validators.required]],
        'country': ['', [Validators.required]],
      }
    );
  }
  
  ngOnInit(): void {
  }
  
  paisElegido(pais:any){
    this.pais = pais;
    this.formValidaciones.controls['country'].setValue(pais.pais);
  }

  CargarActor(){
    this.actor.nombre = this.formValidaciones.controls['firstName'].value;
    this.actor.apellido = this.formValidaciones.controls['lastName'].value;
    this.actor.email = this.formValidaciones.controls['email'].value;
    this.actor.apellido = this.formValidaciones.controls['lastName'].value;
    this.actor.pais = this.pais;

    this.actores.listadoActores.push(this.actor);    

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
