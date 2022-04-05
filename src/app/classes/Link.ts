export default class Link {
  private _name: string;
  private _icon: string;
  private _path: string;

  constructor(name: string, icon: string, path: string) {
    this._name = name;
    this._icon = icon;
    this._path = path;
  }

  get name(): string {
    return this._name;
  }

  get icon(): string {
    return this._icon;
  }

  get path(): string {
    return this._path;
  }
}
