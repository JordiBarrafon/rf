import { FiltroTextoPipe } from './catalogo/filtro-texto.pipe';
import { FiltroFechaPipe } from './catalogo/filtro-fecha.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticulosService } from './servicios/articulos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [	
    AppComponent,
    CatalogoComponent,
    HeaderComponent,
    BodyComponent,
    ArticuloComponent,
    FiltroFechaPipe,
    FiltroTextoPipe,
      HomeComponent
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
