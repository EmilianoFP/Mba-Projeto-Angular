import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Mascara } from './mascara';

@Directive({
  selector: '[appMascaraTelefone]'
})
export class MascaraTelefone extends Mascara {

  constructor(ngControl: NgControl) {
    super(ngControl)
  }

  addMascara(valor: string): string {

    const formatacaoString= valor.replace(/\D/g, "")
    const formatacaoStringB = formatacaoString.replace(/^(\d\d)(\d)/g, "($1) $2")
    const formatacaoStringC = formatacaoStringB.replace(/(\d{4})(\d)/, "$1-$2")

    return formatacaoStringC;
  }

}