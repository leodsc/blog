import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tema } from '../model/Tema';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  constructor(private http: HttpClient) {}

  criar(tema: Tema): Observable<Tema> {
    return this.http.post('http://localhost:8080/tema/create', tema);
  }
}
