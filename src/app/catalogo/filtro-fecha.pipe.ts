import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroFecha'
})
export class FiltroFechaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultados = [];

    //el pipe retornará aquellos artículos cuya fecha de creación coincida con la seleccionada en la casilla de filtro
    let fecha = new Date(arg).toLocaleDateString('en-GB');
    for(const articulo of value){
      if(articulo.fechaCreacion.toLocaleDateString('en-GB') == fecha || !arg){
        resultados.push(articulo);
      }
    }

    return resultados;
  }

}
