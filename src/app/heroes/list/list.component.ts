import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Batman', 'American Captain', 'Thor'];
  removedHero: string = '';

  removeHero() {
    this.removedHero = this.heroes.shift() || '';
  }
}
