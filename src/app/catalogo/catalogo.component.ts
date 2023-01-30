import { ArticulosService } from './../servicios/articulos.service';
import { Articulo } from './../modelos/articulo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  articulos: Articulo[];
  filtroArticulo = '';
  filtroArticuloFecha = '';

  //recuperamos los artículos del servicio para mostrarlos en la plantilla del catálogo
  constructor(private servicioArticulos: ArticulosService){
    this.articulos = this.servicioArticulos.getArticulos();
  }

}
