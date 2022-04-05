import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserLogin } from 'src/app/model/UserLogin';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user: User = new User();
  confirmarSenha?: string;
  tipoUsuario?: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  tipoUser($event: any) {
    this.tipoUsuario = $event?.target.value;
  }

  cadastrar($event: any) {
    this.user.tipo = this.tipoUsuario;

    this.user.senha != this.confirmarSenha
      ? alert('Senhas diferentes!')
      : this.authService.cadastrar(this.user).subscribe((resp: User) => {
          this.user = resp;
          environment.nome = this.user.nome;
          environment.foto = this.user.foto;
          console.log(environment.nome, environment.foto);
          this.router.navigate(['/login']);
          alert('Usuário cadastrado com sucesso!');
        });
  }
}
