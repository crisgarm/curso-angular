import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <h3>La base es {{ base }}</h3>

    <button (click)="accumulator(base)">{{ base }}</button>
    <span>{{ number }}</span>
    <button (click)="accumulator(-base)">-{{ base }}</button>
  `,
})
export class counterComponent {
  title: string = 'Contador App';
  number: number = 0;
  base: number = 5;

  accumulator(valor: number) {
    this.number += valor;
  }
}
