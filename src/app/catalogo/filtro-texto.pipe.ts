import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTexto'
})
export class FiltroTextoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultados = [];

    //el pipe retornará todos aquellos artículos que en los campos de texto o tipo contenga el texto introducido en la casilla de filtrado
    for(const articulo of value){
      if(articulo.nombre.indexOf(arg) > -1 || articulo.descripcion.indexOf(arg) > -1 || articulo.tipo.indexOf(arg) > -1){
        resultados.push(articulo);
      }
    }

    return resultados;
  }

}
