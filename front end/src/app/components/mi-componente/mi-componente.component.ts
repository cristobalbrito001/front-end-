import { from } from "rxjs";
import {Component} from '@angular/core';

@Component({
    selector:'mi-componente',
    templateUrl:'./mi-componente.component.html'
})

export class Micomponente{

    public titulo:string;
    public comentario:string;
    public year:number;
    public mostrarPeliculas:boolean;

    constructor(){
        this.comentario="hola mundo soy mi componente";
        this.titulo="este es mi primer componente";
        this.year=2020;
        this.mostrarPeliculas=true
        console.log("mi componente cargado");
        console.log(this.comentario, this.titulo, this.year);
        
        
    }
    ocultarPelis(){
        this.mostrarPeliculas=false;
    }
}