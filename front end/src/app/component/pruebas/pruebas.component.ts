import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{ Router, ActivatedRoute, Params } from '@angular/router'
@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {
  public nombre:string;
  public apellidos:string;
 public tittle: string;
  constructor(
    private _route: ActivatedRoute,
    private _router:Router
  ) { 
    this.tittle="no se que poner aqui"
  }

  ngOnInit(): void {

    this._route.params.subscribe((params:Params)=>{
      this.nombre=params.nombre
      this.apellidos=params.apellidos
      
    });

  }

  redireccion(){
    this._router.navigate(['/pruebas', 'cristobal','brito'])
  }


}
