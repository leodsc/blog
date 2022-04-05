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

  headers = new HttpHeaders().set(
    'Authorization',
    'Basic bGVveml0b0BnbWFpbC5jb206dGVzdGUxMjM='
  );

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

  editar(tema: Tema) {
    this.http.put('http://localhost:8080/tema', tema, {
      headers: this.headers,
    });
  }
}
