import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListarComponent} from './components/listar/listar.component';
import {EditarComponent} from './components/editar/editar.component';
import {MedicoResolve} from './service/medico.resolve.service';


const routes: Routes = [
  {
    component: ListarComponent,
    path: '',
  },
  {
    component: EditarComponent,
    path: 'novo',
    resolve: {
      medico: MedicoResolve,
    }
  },
  {
    component: EditarComponent,
    path: 'editar/:id',
    resolve: {
      medico: MedicoResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
