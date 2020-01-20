import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacienteListagemComponent } from './listar/listar.component';
import { PacienteCadastroComponent } from './cadastro/cadastro.component';


const routes: Routes = [
  {path: "paciente" , component: PacienteListagemComponent},
  {path: "paciente/cadastro" , component: PacienteCadastroComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { } 
