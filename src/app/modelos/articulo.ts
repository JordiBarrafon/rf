import { ArticulosService } from './../servicios/articulos.service';
import { ArticuloInterface } from './articuloInterface';
export class Articulo implements ArticuloInterface{
    public id?: number;
    public fechaCreacion?: Date;
    public nombre: string;
    public descripcion: string;
    public tipo: string;
    private servicioArticulo?: ArticulosService;

    constructor(nombre:string, descripcion:string, tipo:string){
      this.servicioArticulo = new ArticulosService;
      this.id = this.servicioArticulo.maximoId();
      this.fechaCreacion = new Date();
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.tipo = tipo;
    }


}
