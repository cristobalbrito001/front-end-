import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  user: any;
  public tittle:string;
  public campo:string
  constructor() { 
    this.tittle="formulario";
    this.user={
      nombre:'',
      apellidos:'',
      bio:'',
      genero:''
    }
  }

  ngOnInit(): void {
  }
  onSubmit(){
    alert("usado");
    console.log(this.user);
    
  }

  hasDadoClick(){
    alert("has dado click");
  }
  hasSalido(){
    alert('has salido')
  }
  hasPrionadoEnter(){
    alert('enter')
  }
}
