import { Component, OnInit, ViewChild } from '@angular/core';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  postagens: Postagem[] = [
    new Postagem(new Tema('futebol'), 'qual o jogo de hoje', 'hoje tem jogo'),
    new Postagem(new Tema('futebol'), 'qual o jogo de hoje', 'hoje tem jogo'),
    new Postagem(new Tema('futebol'), 'qual o jogo de hoje', 'hoje tem jogo'),
    new Postagem(new Tema('futebol'), 'qual o jogo de hoje', 'hoje tem jogo'),
    new Postagem(new Tema('futebol'), 'qual o jogo de hoje', 'hoje tem jogo'),
    new Postagem(new Tema('futebol'), 'qual o jogo de hoje', 'hoje tem jogo'),
  ];
  temas: Tema[] = [new Tema('futebol'), new Tema('bilhete unico')];
  currentPanel: string = 'postagens';

  constructor() {}

  ngOnInit(): void {}

  changeCurrentPanel(panel: string) {
    this.currentPanel = panel;
  }
}
