import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchAll } from 'rxjs';
import Link from 'src/app/classes/Link';
import { AuthService } from 'src/app/service/auth.service';
import { MenuLoginService } from 'src/app/service/menu-login.service';
import { environment } from 'src/environments/environment.prod';
import { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() theme: any;
  logado: boolean = false;
  showNav: boolean = false;
  nome = sessionStorage.getItem('nome');
  foto: string = '';
  email = environment.email;
  navActive: string = '';
  navigation: Link[] = [
    new Link('Login', '/assets/user.svg', '/login'),
    new Link('Cadastrar', '/assets/user.svg', '/cadastrar'),
  ];

  constructor(
    private route: Router,
    private menuLoginService: MenuLoginService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.menuLoginService.logadoBehavior.subscribe((status) => {
      this.logado = status;
      if (this.logado) {
        this.nome = sessionStorage.getItem('nome');
        this.foto = String(sessionStorage.getItem('foto'));
      }
    });
  }

  changeNav() {
    this.showNav = !this.showNav;
    this.navActive = this.showNav ? 'nav-active' : '';
  }

  sair() {
    sessionStorage.removeItem('token');
    this.logado = false;
    this.route.navigate(['/']);
  }

  editarPerfil() {}

  swalOptions: SweetAlertOptions = {
    title: 'Atualizar usuario',
    confirmButtonColor: 'green',
    cancelButtonColor: 'red',
    confirmButtonText: 'Atualizar',
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
    preConfirm: () => {},
  };
}
