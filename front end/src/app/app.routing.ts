//importar los modulos de los reoyer de angular

import{ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { from } from 'rxjs';


//importar componentes a los cuales quiero hacer una pagina exclusiva

import{ HomeComponent } from './components/home/home.component';

import { BlogComponent } from './components/blog/blog.component';

import{ FormularioComponent } from './components/formulario/formulario.component'

import{ PeliculasComponent } from './component/peliculas/peliculas.component'

import {PruebasComponent} from './component/pruebas/pruebas.component'
import { ErrorComponent } from './components/error/error.component';

// arry de rutas

const appRoutes: Routes=[
    {path:'', component: HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'blog', component:BlogComponent},
    {path:'formulario', component:FormularioComponent},
    {path:'peliculas',component:PeliculasComponent},
    {path: 'pruebas', component:PruebasComponent},
    {path: 'pruebas/:nombre/:apellidos', component:PruebasComponent},
    {path:'**', component:ErrorComponent}
];

// exportar el modulo de rotas
export const appRutingProviders:any[]=[];
export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);