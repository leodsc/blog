import { Component, OnInit, ViewChild } from '@angular/core';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from '../../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  postagens: Postagem[] = [];
  temas: string[] = ['futebol', 'bilhete unico'];
  currentPanel: string = 'postagens';
  tema: Tema = new Tema();

  constructor(private temaService: TemaService) {}

  ngOnInit(): void {}

  changeCurrentPanel(panel: string) {
    this.currentPanel = panel;
  }

  criarTema() {
    this.temaService.criar(this.tema).subscribe((resp: Tema) => {
      this.tema = resp;
    });
  }
}
