import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroFecha'
})
export class FiltroFechaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultados = [];

    let fecha = new Date(arg).toLocaleDateString('en-GB');
    for(const articulo of value){
      if(articulo.fechaCreacion.toLocaleDateString('en-GB') == fecha || !arg){
        resultados.push(articulo);
      }
    }

    return resultados;
  }

}
