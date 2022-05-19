
export class Pelicula {

    id:number;
    nombre:string;
    tipo:string;
    fechaEstreno:string;
    cantidadPublico:number;
    pathImg:string;

    constructor(id:number, nombre:string, tipo:string, fechaEstreno:string, cantidadPublico:number, pathImg:string){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantidadPublico = cantidadPublico;
        this.pathImg = pathImg;
    }
}

