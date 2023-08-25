export class DestinoViaje {
  private selected: boolean;
  constructor(public name: string, public url: string) {
    this.selected = false;
  }

  isSelected(): boolean {
    return this.selected;
  }

  setSelected(s: boolean){
    this.selected = s;
  }
}
