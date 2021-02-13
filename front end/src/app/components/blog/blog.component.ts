import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../../services/articulo.service'
import { Articulo} from '../../models/articulo'
import { Global } from 'src/app/services/global';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers:[ArticuloService]
})
export class BlogComponent implements OnInit {
  public articulos: Articulo[];
  public url:string;
  constructor(
    private _ArticuloService:ArticuloService
  ) {
    this.url=Global.url;
   }

  ngOnInit(): void {
    console.log(
     this._ArticuloService.getArticles().subscribe(
       response=>{
         if(response.article){
           this.articulos = response.article;
           
           
         }else{
          console.log('no se encontro nada');
          
         }
          
       },
       error=>{
         console.log(error);
         
       }
     )
     );
    }

}
