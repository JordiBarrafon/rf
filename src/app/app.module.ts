import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticuloNuevoComponent } from './articulo/articulo-nuevo/articulo-nuevo.component';
import { ArticuloEditarComponent } from './articulo/articulo-editar/articulo-editar.component';
import { ArticulosService } from './servicios/articulos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    HeaderComponent,
    BodyComponent,
    ArticuloComponent,
    ArticuloNuevoComponent,
    ArticuloEditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ArticulosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
