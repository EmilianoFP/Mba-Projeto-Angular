import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioCadastroComponent } from './components/cadastro/cadastro.component';
import { UsuarioListaComponent } from './components/lista/lista.component';



const routes: Routes = [
  {path: "usuario", component : UsuarioListaComponent},
  {path: "usuario/cadastro", component: UsuarioCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
