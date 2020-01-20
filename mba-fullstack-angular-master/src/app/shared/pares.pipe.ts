import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pares'
})
export class ParesPipe implements PipeTransform {

  transform(numeros: number[]): any {
    return numeros.filter(numero => numero % 2 === 0);
  }

}
