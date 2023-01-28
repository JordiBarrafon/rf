import { ArticulosService } from './../../servicios/articulos.service';
import { Articulo } from './../../modelos/articulo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {
  public articulo: Articulo;

  constructor(private router: ActivatedRoute, private servicioArticulos: ArticulosService) {
    let id = router.snapshot.params['id'];
    this.articulo = servicioArticulos.getArticulo(id);
   }

  ngOnInit() {
  }

}
