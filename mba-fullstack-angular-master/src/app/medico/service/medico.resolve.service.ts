import { Injectable } from '@angular/core';
import {BaseApiService} from '../../shared/base-api.service';
import {HttpClient} from '@angular/common/http';
import {Medico} from '../model/medico';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MedicoService} from './medico.service';

@Injectable({
  providedIn: 'root'
})
export class MedicoResolve implements Resolve<Medico> {
  constructor(private medicoService: MedicoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Medico> | Medico {
    const id = route.paramMap.get('id');
    if (id) {
      return this.medicoService.consultar(id);
    }
    return new Medico();

  }


}
