import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  counter: number = 0;

  handleUpdateCounter = (value: number = 1) => (this.counter += value);
  handleReset = () => (this.counter = 0);
}
