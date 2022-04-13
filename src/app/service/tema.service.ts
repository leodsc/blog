import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tema } from '../model/Tema';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  constructor(private http: HttpClient) {}
  token: any = sessionStorage.getItem('token');

  headers = new HttpHeaders().set('Authorization', this.token);

  getAll(): Observable<Tema> {
    return this.http.get('https://blog-pessoal-leo.herokuapp.com/tema', {
      headers: this.headers,
    });
  }

  criar(tema: Tema): Observable<Tema> {
    return this.http.post('https://blog-pessoal-leo.herokuapp.com/tema', tema, {
      headers: this.headers,
    });
  }

  editar(tema: Tema): Observable<Tema> {
    return this.http.put('https://blog-pessoal-leo.herokuapp.com/tema', tema, {
      headers: this.headers,
    });
  }

  excluir(tema: Tema): Observable<Tema> {
    let id = tema.id;
    return this.http.delete(
      `https://blog-pessoal-leo.herokuapp.com/tema/${id}`,
      {
        headers: this.headers,
      }
    );
  }
}
