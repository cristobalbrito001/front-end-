import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'espar'
})
export class esParPipe implements PipeTransform{
     
    transform(value:any){
        if(value % 2 == 0){
            return value+" es par"
        }else{
            return value +" no es par"
        }
        return "El año es: "+value
    }

}