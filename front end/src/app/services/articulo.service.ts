import {  Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from '../models/articulo';
import { Global } from '../services/global';

@Injectable()

export class ArticuloService {

    public url: string;


    constructor(
        private _http:HttpClient     
    ){
        this.url= Global.url
    }
    pruebas(){
        return "soy articulos"
    }
    getArticles():Observable<any>{
        return this._http.get(this.url+'articulo');
    }
}

