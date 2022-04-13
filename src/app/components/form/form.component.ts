import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/UserLogin';
import { AuthService } from 'src/app/service/auth.service';
import { MenuLoginService } from 'src/app/service/menu-login.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  userLogin: UserLogin = new UserLogin();

  constructor(
    private authService: AuthService,
    private router: Router,
    private menuLoginService: MenuLoginService
  ) {}

  ngOnInit(): void {}

  entrar() {
    this.authService.entrar(this.userLogin).subscribe(
      (resp: UserLogin) => {
        this.userLogin = resp;
        let temp: any;
        environment.token = 'Basic ' + this.userLogin.token;
        // environment.nome = this.userLogin.nome;
        temp = this.userLogin.nome;
        environment.foto = this.userLogin.foto;
        environment.email = this.userLogin.usuario;
        sessionStorage.setItem('token', environment.token);
        sessionStorage.setItem('nome', temp);
        temp = this.userLogin.id;
        sessionStorage.setItem('id', temp);
        console.log(this.userLogin);
        this.menuLoginService.editMenu(true);
        this.router.navigate(['/inicio']);
      },
      (erro) => {
        if (erro.status == 401 || erro.status == 403) {
          alert('usuario ou senha incorretos');
          this.router.navigate(['/login']);
        }
      }
    );
  }
}
