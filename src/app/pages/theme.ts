export default class Theme {
  private _name?: string;
  private _type?: string | null;

  constructor(type: string | null) {
    this._type = type;
    this._name = this._type == 'dark' ? 'Claro' : 'Escuro';
  }

  public get name() {
    return this._name;
  }

  public get type() {
    return this._type;
  }

  change(): void {
    if (this._type == 'dark') {
      this._type = 'light';
      this._name = 'Escuro';
    } else {
      this._type = 'dark';
      this._name = 'Claro';
    }
    localStorage.setItem('theme', this._type);
  }
}
