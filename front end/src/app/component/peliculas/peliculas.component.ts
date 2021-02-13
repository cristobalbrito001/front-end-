import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula }from '../../models/pelicula';
import { PeliculaServices } from '../../services/pelicula.service'
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers:[PeliculaServices]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita:Pelicula;
  public fecha:any;
  constructor(
    private _PeliculaServices:PeliculaServices
  ) {
    this.titulo = "pelis"
    this.peliculas = this._PeliculaServices.getPeliculas()
    this.fecha = new Date(2020,1,12)
    //console.log("contructor lanzado"); 
  }

  ngOnInit(): void {
    //console.log(this.peliculas);
    console.log(this._PeliculaServices.holaMundo());
    

    console.log("componente iniciado");
  }
  ngDoCheck() {
    //console.log("DoCheck lanzado");

  }

  cambiarTitulo() {
    this.titulo = "el titulo cambia"
  }
  ngOnDestroy() {
    console.log("eliminar el componente")
  }


  mostrarFavorita(event){
   this.favorita = event.pelicula
  }
}
