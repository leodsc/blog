import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root',
})
export class PostagemService {
  constructor(private http: HttpClient) {}

  criar(postagem: Postagem): Observable<Postagem> {
    return this.http.post('http://localhost:8080/postagem', postagem);
  }
}
