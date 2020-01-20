import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { CorDirective } from './cor.directive';
import { MultiplicarPipe } from './multiplicar.pipe';
import { ParesPipe } from './pares.pipe';
import { FiltroPipe } from './filtro.pipe';

@NgModule({
  declarations: [CorDirective, MultiplicarPipe, ParesPipe, FiltroPipe],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    CorDirective,
    MultiplicarPipe,
    ParesPipe,
    FiltroPipe
  ]
})
export class SharedModule { }
