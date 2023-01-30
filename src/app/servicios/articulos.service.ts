import { TipoArticulo } from './../modelos/TipoArticulo.enum';
import { Articulo } from './../modelos/articulo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  articulos: Articulo[] = [
    { id: 1, nombre: 'Un tranvía llamado deseo', descripcion: 'Los tranvías son en blanco y negro y todo el mundo parece joven y cuerdo cuando la única iluminación en la sala es una vela', tipo: TipoArticulo.pelicula, fechaCreacion:new Date('1951-09-18') },
    { id: 2, nombre: 'El amor en los tiempos del cólera', descripcion: 'Era inevitable: el olor de las almendras amargas le recordaba siempre el destino de los amores contrariados...', tipo: TipoArticulo.ebook, fechaCreacion:new Date('1985-01-01') },
    { id: 3, nombre: 'Return to monkey island', descripcion: 'Gráficos nuevos, mismo humor, misma alma.', tipo: TipoArticulo.videojuego, fechaCreacion:new Date('2022-09-19') },
    { id: 4, nombre: 'El club de la lucha', descripcion: 'Boom!', tipo: TipoArticulo.pelicula, fechaCreacion:new Date('1996-08-17') },
    { id: 5, nombre: 'Forrest Gump', descripcion: 'La vida es como una caja de bombones...', tipo: TipoArticulo.pelicula, fechaCreacion:new Date('1994-07-06') },

  ];

  constructor() {}

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
