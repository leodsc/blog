import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserLogin } from 'src/app/model/UserLogin';
import { AuthService } from 'src/app/service/auth.service';

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

    console.log(JSON.stringify(this.user));
    this.user.senha != this.confirmarSenha
      ? alert('Senhas diferentes!')
      : this.authService.cadastrar(this.user).subscribe((resp: User) => {
          this.user = resp;
          this.router.navigate(['/login']);
          alert('Usuário cadastrado com sucesso!');
        });
  }
}
