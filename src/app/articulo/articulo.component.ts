import { ArticulosService } from './../servicios/articulos.service';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from './../modelos/articulo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {
  public articulo: Articulo;

  constructor(private router: ActivatedRoute, private servicioArticulos: ArticulosService) {
    let id = router.snapshot.params['id'];
    this.articulo = servicioArticulos.getArticulo(id);
   }
}