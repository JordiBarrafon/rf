export class Articulo {
    public id: number;
    public nombre: string;
    public descripcion: string;
    public tipo: string;

    constructor(id:number, nombre:string, descripcion:string, tipo:string){
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.tipo = tipo;
    }

}
