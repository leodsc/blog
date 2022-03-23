export default class Link {
  private name: string;
  private icon: string;

  constructor(name: string, icon: string) {
    this.name = name;
    this.icon = icon;
  }

  getName(): string {
    return this.name;
  }

  getIcon(): string {
    return this.icon;
  }
}
