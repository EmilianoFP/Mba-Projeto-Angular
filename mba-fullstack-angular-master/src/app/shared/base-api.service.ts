import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

export abstract class BaseApiService<T> {
  private url: string;

  protected constructor(protected httpClient: HttpClient,
                        path: string ) {
    this.url = `${environment.baseUrl}/${path}`;
    console.log(this.url);
  }

  listar(): Observable<Array<T>> {
    console.log(this.url);
    return this.httpClient.get(this.url)
      .pipe(map(value => value as Array<T>));
  }

  consultar(id: number | string): Observable<T | any> {
    return this.httpClient.get(`${this.url}/${id}`)
      .pipe(map(value => value as T));
  }

  criar(body?: T): Observable<T | any> {
    return this.httpClient.post(this.url, body)
      .pipe(map(value => value as T));
  }

  atualizar(id: number | string, body?: T): Observable<T> {
    return this.httpClient.put(`${this.url}/${id}`, body)
      .pipe(map(value => value as T));
  }

  remover(id: number | string): Observable<any> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  salvar(body?: any): Observable<T> {
    const {id, ...bodyRequest} = body;
    if (id) {
      return this.atualizar(id, bodyRequest);
    }
    return this.criar(body);
  }
}
