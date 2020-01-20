import { NgModule, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraCpf } from 'src/app/mascaras/mascaraCpf.directive';
import { MascaraCep } from 'src/app/mascaras/mascaraCep.directive';
import { MascaraTelefone } from 'src/app/mascaras/mascaraTelefone.directive';





@NgModule({
  declarations: [MascaraCpf, MascaraCep, MascaraTelefone],
  imports: [
    CommonModule
  ],
  exports: [MascaraCpf , MascaraCep, MascaraTelefone]
})
export class ModuloGenericoModule { }
