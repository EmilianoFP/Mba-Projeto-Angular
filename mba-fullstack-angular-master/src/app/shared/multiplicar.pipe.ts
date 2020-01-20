import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicar'
})
export class MultiplicarPipe implements PipeTransform {

  transform(value: number, multiplicador): any {
    console.log(value, multiplicador);
    return value ? value * multiplicador : 0;
  }

}
