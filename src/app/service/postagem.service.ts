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
    return this.http.get<Postagem[]>(
      'https://blog-pessoal-leo.herokuapp.com/postagem',
      {
        headers: this.headers,
      }
    );
  }

  criar(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(
      'https://blog-pessoal-leo.herokuapp.com/postagem',
      postagem,
      { headers: this.headers }
    );
  }

  editar(postagem: Postagem): Observable<Postagem[]> {
    return this.http.put<Postagem[]>(
      'https://blog-pessoal-leo.herokuapp.com/postagem',
      postagem,
      { headers: this.headers }
    );
  }

  excluir(postagem: Postagem): Observable<Postagem> {
    return this.http.delete<Postagem>(
      `https://blog-pessoal-leo.herokuapp.com/postagem/${postagem.id}`,
      {
        headers: this.headers,
      }
    );
  }

  procurarTitulo(titulo: string): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(
      `https://blog-pessoal-leo.herokuapp.com/postagem/${titulo}`,
      {
        headers: this.headers,
      }
    );
  }
}
