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
    //recuperamos el id del artículo en el caso de que estemos editando uno existente y le pedimos al servicio que nos retorne el objeto
    let id = router.snapshot.params['id'];
    this.articulo = servicioArticulos.getArticulo(id);
    //generamos el formulario con las reglas de validación
    this.formulario = formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipo: ['', Validators.required]
    });
    //si estamos en modo edición, vinculamos los valores del objeto artículo con los controles del formulario
    if(this.articulo){
      this.formulario.controls['nombre'].setValue(this.articulo.nombre);
      this.formulario.controls['descripcion'].setValue(this.articulo.descripcion);
      this.formulario.controls['tipo'].setValue(this.articulo.tipo);
    }
  }

  get f() { return this.formulario.controls; }

  actualizar(){
    //actualizamos el artículo consultado y retornamos al catálogo
     this.servicioArticulos.updateArticulo(this.articulo);
     this.navegador.navigateByUrl('catalogo');
  }

  guardar(){
    //si la validación de los campos es correcta pasamos a modificar los cambios o a generar un nuevo artículo si hemos entrado al formulario de creación
    this.submitted = true;

    if(this.formulario.invalid)
      return;
      //se crea un nuevo artículo
    if(!this.articulo){
      this.servicioArticulos.nuevoArticulo(new Articulo(
        this.f['nombre'].value, this.f['descripcion'].value, this.f['tipo'].value
      ));
    }else{
      //se modifica el artículo existente
      this.articulo.nombre= this.f['nombre'].value;
      this.articulo.descripcion= this.f['descripcion'].value;
      this.articulo.tipo= this.f['tipo'].value;

      this.servicioArticulos.updateArticulo(this.articulo);
    }
    this.navegador.navigateByUrl('catalogo');
  }

  volver(){
    this.navegador.navigateByUrl('catalogo');
  }

}
