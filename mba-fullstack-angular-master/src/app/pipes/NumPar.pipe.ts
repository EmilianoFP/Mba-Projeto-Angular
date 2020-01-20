import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NumPar'
})
export class NumParPipe implements PipeTransform {

  transform(numeros: number[], ...args: any[]): number[] {

    console.log(numeros);
    const par = numeros.filter(numero => numero % 2 == 0);
    
    return par;
  }

}
