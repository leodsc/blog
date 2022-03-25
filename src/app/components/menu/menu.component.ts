import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  buttonName: string = 'Sair';
  text: string = 'Logado como: Leo';
  @Input() theme: any;

  constructor() {}

  ngOnInit(): void {
    if (window.location.href.endsWith('/cadastrar')) {
      this.buttonName = 'Entrar';
      this.text = '';
    }
  }
}
