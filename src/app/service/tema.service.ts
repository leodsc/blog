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
    return this.http.get('http://localhost:8080/tema', {
      headers: this.headers,
    });
  }

  criar(tema: Tema): Observable<Tema> {
    return this.http.post('http://localhost:8080/tema', tema, {
      headers: this.headers,
    });
  }

  editar(tema: Tema): Observable<Tema> {
    return this.http.put('http://localhost:8080/tema', tema, {
      headers: this.headers,
    });
  }

  excluir(tema: Tema): Observable<Tema> {
    return this.http.delete('http://localhost:8080/tema', {
      headers: this.headers,
      body: tema,
    });
  }
}
