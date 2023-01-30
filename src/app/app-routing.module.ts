import { HomeComponent } from './home/home.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'catalogo', component: CatalogoComponent},
  { path: 'detalleArticulo/:id', component: ArticuloComponent },
  { path: 'nuevoArticulo', component: ArticuloComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
