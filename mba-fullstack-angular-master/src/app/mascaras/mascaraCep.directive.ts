import { NgControl } from '@angular/forms';
import { Directive } from '@angular/core';
import { Mascara } from './mascara';

@Directive({
    selector: '[addMascaraCep]'
})
export class MascaraCep extends Mascara{

    constructor (ngControl: NgControl){
        super(ngControl)
    }

    addMascara(valor: string): string{
        const soNumeros = valor.replace(/[^0-9.,-]/g, '');

        const formatacaoString = soNumeros.replace(/^(\d{5})(\d)/, "$1-$2");

        return formatacaoString;
    }

}