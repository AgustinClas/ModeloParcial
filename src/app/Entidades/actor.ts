export class Actor {

    id:number;
    nombre:string;
    apellido:string;
    direccion:string;
    email:string;
    pais:any;

    constructor(id:number, nombre:string, apellido:string, direccion:string, email:string, pais:any){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.email = email;
        this.pais = pais;
    }

}
