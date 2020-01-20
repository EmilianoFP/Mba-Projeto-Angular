import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { UsuarioModel } from '../../model/usuario';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  //angular material
  displayedColumns: string[] = ['id', 'login','deletar','editar'];
  columns = ['id', 'login'];
  dataSource: MatTableDataSource<UsuarioModel>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  subscription: Subscription;

  usuarios: UsuarioModel[];

  constructor(protected usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {

    this.listar();
  }

  listar(){
    this.usuarioService.listar().subscribe(usuario => {
      this.usuarios = usuario;
      this.dataSource = new MatTableDataSource(this.usuarios);
    })
  }

  remover(id: number){
    this.usuarioService.deleteById(id).subscribe(() => {
      this.showMessageSuccess();
    }),(error)=>{
      Swal.fire(
        'Atenção',
        'Houve um problema ao tentar remover o usuario, tente novamente',
        'warning'
      )
    }
  }

  edit(idEntidade){
    this.router.navigate(['/usuario/edit'], {
      queryParams: { id: idEntidade },

    })

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  showMessageSuccess(){
    Swal.fire({
      title: 'Remover',
      text: 'Usuário removido com sucesso',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'ok',
    }).then((result) => {
      this.listar();
    })
  }


}
