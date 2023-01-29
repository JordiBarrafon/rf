import { Router } from '@angular/router';
import { ArticulosService } from './../../servicios/articulos.service';
import { Articulo } from './../../modelos/articulo';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-articulo-nuevo',
  templateUrl: './articulo-nuevo.component.html',
  styleUrls: ['./articulo-nuevo.component.css']
})
export class ArticuloNuevoComponent {
  public formulario: FormGroup;
  submitted = false;

  constructor(private servicioArticulo: ArticulosService, private formBuilder: FormBuilder, private navegador: Router){
    this.formulario = formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  get f() { return this.formulario.controls; }

  guardar(){
    this.submitted = true;

    if(this.formulario.invalid)
      return;

    this.servicioArticulo.nuevoArticulo(new Articulo(
      this.f['nombre'].value, this.f['descripcion'].value, this.f['tipo'].value
    ));
    this.navegador.navigateByUrl('catalogo');
  }

}
