import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/UserLogin';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  userLogin: UserLogin = new UserLogin();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  entrar() {
    this.authService.entrar(this.userLogin).subscribe(
      (resp: UserLogin) => {
        this.userLogin = resp;
        environment.token = 'Basic ' + this.userLogin.token;
        environment.nome = this.userLogin.nome;
        environment.foto = this.userLogin.foto;
        console.log(environment);
        this.router.navigate(['/inicio']);
      },
      (erro) => {
        if (erro.status == 500) {
          alert('usuario ou senha incorretos');
        }
      }
    );
  }
}
