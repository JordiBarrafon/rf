import { TipoArticulo } from './TipoArticulo.enum';
import { ArticulosService } from './../servicios/articulos.service';
import { ArticuloInterface } from './articuloInterface';
export class Articulo implements ArticuloInterface{
    public id?: number;
    public fechaCreacion?: Date;
    public nombre: string;
    public descripcion: string;
    public tipo: TipoArticulo;
    private servicioArticulo?: ArticulosService;

    constructor(nombre:string, descripcion:string, tipo:TipoArticulo){
      this.servicioArticulo = new ArticulosService;
      this.id = this.servicioArticulo.maximoId();
      this.fechaCreacion = new Date();
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.tipo = tipo;
    }

    // getFechaCreacion(){
    //   // return this.fechaCreacion.toLocaleDateString('en-US');
    // }

}
