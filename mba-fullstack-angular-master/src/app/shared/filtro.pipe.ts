import { Pipe, PipeTransform } from '@angular/core';
import {Medico} from '../medico/model/medico';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(medicos: Medico[], filtro: string): Medico[] {
    if (filtro) {
      return medicos
        .filter(medico => medico.nome.indexOf(filtro) > -1);
    }
    return medicos;
  }

}
