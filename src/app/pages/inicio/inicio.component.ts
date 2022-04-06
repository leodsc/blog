import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';
import { TemaService } from '../../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  _reload = true;
  modalEdit: boolean = false;
  currentTema: any;
  postagens: Postagem[] = [];
  // temas: string[] = ['futebol', 'bilhete unico'];
  currentPanel: string = 'postagens';
  temas: any;
  tema: Tema = new Tema();
  postagem: Postagem = new Postagem();

  constructor(
    private temaService: TemaService,
    private router: Router,
    private postagemService: PostagemService
  ) {}

  ngOnInit(): void {
    environment.token !== '' ? this.getAll() : this.router.navigate(['/login']);
  }

  changeCurrentPanel(panel: string) {
    this.currentPanel = panel;
  }

  getAll() {
    this.temaService.getAll().subscribe((resp: Tema) => {
      this.temas = resp;
    });
  }

  criarTema() {
    this.temaService.criar(this.tema).subscribe((resp: Tema) => {
      this.tema = resp;
      alert('Tema adicionado com sucesso!');
      this.getAll();
    });
  }

  editar($event: any) {
    this.modalEdit = !this.modalEdit;
    this.currentTema = $event;
    // this.temaService.editar($event);
    // this.getAll();
  }

  excluir($event: any) {
    this.temaService.excluir($event).subscribe(() => {
      alert('Tema excluído!');
    });
    this.getAll();
  }

  enviarEdicao() {
    console.log(this.currentTema);
    this.temaService.editar(this.currentTema).subscribe((resp: Tema) => {
      alert(`Tema foi alterado!`);
    });
    this.getAll();
  }

  enviarPostagem() {
    this.postagem.Usuario!.id = Number(sessionStorage.getItem('id'));
    alert(this.postagem.Usuario!.id);
    // this.postagemService.criar(this.postagem).subscribe((resp: Postagem) => {
    //   this.postagem = resp;
    //   alert('Postagem criada!');
    // });
  }
}
