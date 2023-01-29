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

  constructor(private servicioArticulos: ArticulosService){
    this.articulos = this.servicioArticulos.getArticulos();
  }

  prueba(){
    console.log(this.articulos)
    this.articulos.pop();
    console.log(this.articulos)
  }
}
