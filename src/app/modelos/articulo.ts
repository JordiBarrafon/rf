import { ArticuloInterface } from './articuloInterface';
export class Articulo implements ArticuloInterface{
    public id?: number;
    public fechaCreacion?: Date;
    public nombre: string;
    public descripcion: string;
    public tipo: string;

    constructor(id:number, nombre:string, descripcion:string, tipo:string){
      this.id = id;
      this.fechaCreacion = new Date();
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.tipo = tipo;
    }

}
