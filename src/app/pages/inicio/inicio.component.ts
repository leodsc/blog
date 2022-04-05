import { Component, OnInit, ViewChild } from '@angular/core';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { environment } from 'src/environments/environment.prod';
import { TemaService } from '../../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  @ViewChild('modal') modal: any;
  showModal: boolean = false;
  postagens: Postagem[] = [];
  // temas: string[] = ['futebol', 'bilhete unico'];
  currentPanel: string = 'postagens';
  temas: any;
  tema: Tema = new Tema();

  constructor(private temaService: TemaService) {}

  ngOnInit(): void {
    this.getAll();
  }

  changeCurrentPanel(panel: string) {
    this.currentPanel = panel;
  }

  getAll() {
    this.temaService.getAll().subscribe((resp: Tema) => {
      this.temas = resp;
      console.log(resp);
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
    // this.showModal = !this.showModal;
    this.modal.nativeElement.classList.toggle('modal');
    console.log(this.modal);
    // this.temaService.editar($event);
    // this.getAll();
  }

  // excluir($event: any) {
  //   this.temaService.excluir($event);
  //   this.getAll();
  // }
}
