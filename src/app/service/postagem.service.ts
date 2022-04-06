import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root',
})
export class PostagemService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders().set(
    'Authorization',
    String(sessionStorage.getItem('token'))
  );

  getAll(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>('http://localhost:8080/postagem', {
      headers: this.headers,
    });
  }

  criar(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(
      'http://localhost:8080/postagem',
      postagem,
      { headers: this.headers }
    );
  }

  editar(postagem: Postagem): Observable<Postagem[]> {
    return this.http.put<Postagem[]>(
      'http://localhost:8080/postagem',
      postagem,
      { headers: this.headers }
    );
  }

  excluir(postagem: Postagem): Observable<Postagem> {
    return this.http.delete<Postagem>(
      `http://localhost:8080/postagem/${postagem.id}`,
      {
        headers: this.headers,
      }
    );
  }
}
