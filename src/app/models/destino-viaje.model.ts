export class DestinoViaje {
  private selected: boolean;
  public services: string[];
  constructor(public name: string, public url: string) {
    this.selected = false;
    this.services = ['Piscina', 'Desayuno incluido'];
  }

  isSelected(): boolean {
    return this.selected;
  }

  setSelected(s: boolean){
    this.selected = s;
  }
}
