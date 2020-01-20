import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { MedicoRoutingModule } from '../medico/medico-routing.module';
import { MatToolbarModule, MatTableModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatButtonModule, MatPaginatorModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PacienteService } from '../paciente/service/paciente.service';
import { PacienteCadastroComponent } from './cadastro/cadastro.component';
import { ModuloGenericoModule } from '../modulo-generico/moduloGenerico.module';
import { PacienteListagemComponent } from './listar/listar.component';


@NgModule({
  declarations: [PacienteCadastroComponent, PacienteListagemComponent],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    MedicoRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    ModuloGenericoModule
    
  ],
  providers: [PacienteService],
  exports: []
})
export class PacienteModule { }
