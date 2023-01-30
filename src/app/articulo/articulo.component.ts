import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoArticulo } from './../modelos/TipoArticulo.enum';
import { ArticulosService } from './../servicios/articulos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from './../modelos/articulo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {
  public articulo: Articulo;
  public formulario: FormGroup;
  submitted = false;
  tiposArticulo = Object.values(TipoArticulo);


  constructor(private router: ActivatedRoute, private servicioArticulos: ArticulosService, private formBuilder: FormBuilder, private navegador: Router) {
    let id = router.snapshot.params['id'];
    this.articulo = servicioArticulos.getArticulo(id);
    this.formulario = formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipo: ['', Validators.required]
    });
    if(this.articulo){
      this.formulario.controls['nombre'].setValue(this.articulo.nombre);
      this.formulario.controls['descripcion'].setValue(this.articulo.descripcion);
      this.formulario.controls['tipo'].setValue(this.articulo.tipo);
    }
  }

  get f() { return this.formulario.controls; }

  actualizar(){
     this.servicioArticulos.updateArticulo(this.articulo);
     this.navegador.navigateByUrl('catalogo');
  }

  guardar(){
    this.submitted = true;

    if(this.formulario.invalid)
      return;
    if(!this.articulo){
      this.servicioArticulos.nuevoArticulo(new Articulo(
        this.f['nombre'].value, this.f['descripcion'].value, this.f['tipo'].value
      ));
    }else{
      this.articulo.nombre= this.f['nombre'].value;
      this.articulo.descripcion= this.f['descripcion'].value;
      this.articulo.tipo= this.f['tipo'].value;

      this.servicioArticulos.updateArticulo(this.articulo);
    }
    this.navegador.navigateByUrl('catalogo');
  }

}
