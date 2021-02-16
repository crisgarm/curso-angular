import { Component } from '@angular/core';

interface Character {
  name: string;
  power: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  new: Character = {
    name: 'Trunks',
    power: 14000,
  };

  changeName(event: any) {
    console.log(event.target.value);
  }

  add() {
    console.log(this.new);
  }
}
