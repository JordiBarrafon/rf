import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultados = [];
    for(const articulo of value){
      if(articulo.nombre.indexOf(arg) > -1 || articulo.descripcion.indexOf(arg) > -1 || articulo.tipo.indexOf(arg) > -1){
        resultados.push(articulo);
      }
    }

    return resultados;
  }

}
