import { from } from "rxjs";
import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()

export class PeliculaServices {

    public peliculas:  Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula("Spiderman 4",2016, "https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1"),
            new Pelicula("goku",2020, "https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1"),
            new Pelicula ("coso",2020,"https://www.auditool.org/joomlatools-files/docman-images//G-Y-M-21-NV%20(1).jpg")
          ]
    }
    holaMundo() {
        return 'hola mundo'
    }


    getPeliculas(){
        return this.peliculas

    }
}
