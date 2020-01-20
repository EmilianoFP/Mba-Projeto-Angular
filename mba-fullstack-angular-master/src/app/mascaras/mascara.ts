import {AfterContentChecked, OnChanges} from '@angular/core';
import {NgControl} from '@angular/forms';

export abstract class Mascara implements AfterContentChecked {
    
    constructor(protected ngControl: NgControl) {
    }

    ngAfterContentChecked(){
        if(this.addMascara && this.ngControl && this.ngControl.value){
            this.atualizarForm(this.ngControl.value);
            this.ngControl.control.updateValueAndValidity();
        }
    }

    atualizarForm(inputValue: string){
        const inputString = String(inputValue);

        const NumCaracteres = this.addMascara(inputString);

        this.ngControl.reset();
        this.ngControl.control.patchValue(NumCaracteres);
    }

    abstract addMascara(value: string);

        
    
}