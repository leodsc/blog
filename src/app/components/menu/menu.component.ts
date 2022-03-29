import { Component, Input, OnInit } from '@angular/core';
import Link from 'src/app/classes/Link';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() theme: any;
  showNav: boolean = false;
  navActive: string = '';
  navigation: Link[] = [
    new Link('Inicio', '/assets/user.svg'),
    new Link('Login', '/assets/user.svg'),
    new Link('Cadastrar', '/assets/user.svg'),
  ];

  constructor() {}

  ngOnInit(): void {}

  changeNav() {
    this.showNav = !this.showNav;
    this.navActive = this.showNav ? 'nav-active' : '';
  }
}
