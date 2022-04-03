import { Postagem } from './Postagem';

export class Tema {
  public id?: number;
  public descricao?: string;
  public postagem?: Postagem[];

  constructor(descricao: string) {
    this.descricao = descricao;
  }
}
