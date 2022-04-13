import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post(
      'https://blog-pessoal-leo.herokuapp.com/usuarios/login',
      userLogin
    );
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>(
      'https://blog-pessoal-leo.herokuapp.com/usuarios/signup',
      user
    );
  }

  getById(id: number): Observable<User> {
    let token = String(localStorage.getItem('token'));
    return this.http.get<User>(
      `https://blog-pessoal-leo.herokuapp.com/usuarios/${id}`,
      {
        headers: { Authorization: token },
      }
    );
  }
}
