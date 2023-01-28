import { ArticuloDetalleComponent } from './articulo/articulo-detalle/articulo-detalle.component';
import { ArticuloNuevoComponent } from './articulo/articulo-nuevo/articulo-nuevo.component';
import { ArticuloEditarComponent } from './articulo/articulo-editar/articulo-editar.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'catalogo', component: CatalogoComponent},
  { path: 'detalleArticulo/:id', component: ArticuloDetalleComponent },
  { path: 'nuevoArticulo/:id', component: ArticuloNuevoComponent },
  { path: 'editarArticulo/:id', component: ArticuloEditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
