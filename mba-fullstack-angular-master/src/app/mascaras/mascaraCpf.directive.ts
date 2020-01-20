import { Directive, AfterContentChecked } from "@angular/core";
import { NgControl } from '@angular/forms';
import { Mascara } from './mascara';


@Directive({
    selector: '[addMascaraCpf]'
})

export class MascaraCpf extends Mascara{
    
    constructor(ngControl: NgControl){
        super(ngControl)
    }

    addMascara(valor: string): string{

        const soNumeros = valor.replace(/[^0-9.,-]/g, '');

        const formatacaoString = soNumeros.replace(/(\d{3})(\d)/, '$1.$2');

        const formatacaoStringB = formatacaoString.replace(/(\d{3})(\d)/, '$1.$2');

        const formatacaoStringC = formatacaoStringB.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

        return formatacaoStringC;
    }
}