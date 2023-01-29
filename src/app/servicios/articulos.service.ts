import { Articulo } from './../modelos/articulo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  articulos: Articulo[] = [
    { id: 1, nombre: 'articulo1', descripcion: 'desc art 1', tipo: 'pelicula' },
    { id: 2, nombre: 'articulo2', descripcion: 'desc art 2', tipo: 'pelicula' },
    { id: 3, nombre: 'articulo3', descripcion: 'desc art 3', tipo: 'pelicula' },
    { id: 4, nombre: 'articulo4', descripcion: 'desc art 4', tipo: 'pelicula' },
  ];

  constructor() { }

  maximoId():number{
    let max = 1;
    this.articulos.forEach(element => {
      if (typeof element.id === 'number') {
        max = Math.max(max, element.id);
      }
    });

    return max;
  }

  getArticulos(): Articulo[]  { return this.articulos };
  getArticulo(id: number): any {
    let art = this.articulos.filter( a => a.id == id)[0];

    return art;
  }

  updateArticulo(articulo: Articulo){
    this.articulos.map( a => {
      if(a.id == articulo.id){
        a.nombre = articulo.nombre,
        a.descripcion = articulo.descripcion,
        a.tipo = articulo.tipo
      }
    });
  }

  nuevoArticulo(articulo: Articulo){
    this.articulos.push(articulo);
  }
}
