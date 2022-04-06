import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { User } from 'src/app/model/User';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';
import { TemaService } from '../../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  temaId: number;
  modalEdit: boolean = false;
  currentTema: any;
  currentPanel: string = 'postagens';

  temas: any;
  tema: Tema = new Tema();

  postagem: Postagem = new Postagem();
  currentPostagem: Postagem;
  temaPostagem: Tema;
  postagens: Postagem[];
  modalEditPostagem: boolean = false;

  usuario: User = new User();

  constructor(
    private temaService: TemaService,
    private router: Router,
    private postagemService: PostagemService
  ) {}

  ngOnInit(): void {
    environment.token !== '' ? this.getAll() : this.router.navigate(['/login']);
    this.getAllPostagens();
  }

  getAllPostagens() {
    this.postagemService.getAll().subscribe((resp: Postagem[]) => {
      this.postagens = resp;
    });
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

  editar($event: any, tipo: string) {
    if (tipo == 'tema') {
      this.modalEdit = !this.modalEdit;
      this.currentTema = $event;
      this.temaService.editar($event).subscribe((resp: Tema) => {
        alert('tema editado!');
        this.modalEdit = !this.modalEdit;
        this.getAll();
      });
    } else {
      this.modalEditPostagem = !this.modalEditPostagem;
      this.currentPostagem = $event;
    }
  }

  excluir(tema: Tema) {
    this.temaService.excluir(tema).subscribe(() => {
      alert('Tema excluído!');
      this.getAll();
    });
  }

  enviarEdicao() {
    console.log(this.currentTema);
    this.temaService.editar(this.currentTema).subscribe((resp: Tema) => {
      this.temas.forEach((tema: Tema) => {
        if (tema.id === resp.id) {
          tema = resp;
        }
      });
      alert(`Tema foi alterado!`);
    });
  }

  enviarPostagem() {
    this.postagem.tema = this.temaPostagem;
    this.usuario.id = Number(sessionStorage.getItem('id'));
    this.postagem.usuario = this.usuario;
    this.postagemService.criar(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp;
      alert('Postagem criada!');
      this.getAllPostagens();
    });
  }

  findById(id: number) {
    this.temas.forEach((tema: Tema) => {
      if (tema.id == id) {
        this.temaPostagem = tema;
      }
    });
    console.log(this.temaPostagem);
  }

  editarPostagem() {
    this.currentPostagem.usuario = this.usuario;
    this.postagemService
      .editar(this.currentPostagem)
      .subscribe((resp: Postagem[]) => {
        alert('Postagem editada!');
        this.postagens = resp;
        this.modalEditPostagem = !this.modalEditPostagem;
        this.getAllPostagens();
      });
  }

  excluirPostagem(postagem: Postagem) {
    this.postagemService.excluir(postagem).subscribe(() => {
      alert('Postagem excluida!');
      this.getAllPostagens();
    });
  }
}
