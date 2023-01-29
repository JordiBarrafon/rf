import { ArticuloComponent } from './articulo/articulo.component';
import { ArticuloNuevoComponent } from './articulo/articulo-nuevo/articulo-nuevo.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'catalogo', component: CatalogoComponent},
  { path: 'detalleArticulo/:id', component: ArticuloComponent },
  { path: 'nuevoArticulo', component: ArticuloNuevoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'catalogo'},
  { path: '**', pathMatch: 'full', redirectTo: 'catalogo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
