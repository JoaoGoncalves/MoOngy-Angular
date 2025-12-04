import { Component } from '@angular/core';

@Component({
  selector: 'app-zone1',
  imports: [],
  template: `
    <p (click)="handle()">{{ fullName() }}</p>
  `,
  styles: ``
})
export class Zone1 {
  firstName = 'John';
  lastName = 'Doe';

  fullName() {
    console.log('This function has been called');
    return `${this.firstName} ${this.lastName}`;
  }

  handle() {}
}