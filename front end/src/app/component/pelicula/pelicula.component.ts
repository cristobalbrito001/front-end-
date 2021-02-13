import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  @Input() pelicula:Pelicula;

  @Output() Marcarfav= new EventEmitter();//event emmiter debe saber lo que va a recibir y eviar el compojnente padre
  
  
  constructor() { }

  ngOnInit(): void {
  }
  seleccionar(event,pelicula){
    this.Marcarfav.emit ({
      pelicula: pelicula
    })
   
  }

}
