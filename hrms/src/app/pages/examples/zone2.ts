import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-some',
  standalone: true,
  template: `
    <p (click)="handle()">{{user.firstName}}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SomeComponent {
  @Input({ required: true }) user!: { firstName: string; lastName: string };

  handle() {}
}


@Component({
  selector: 'app-zone2',
  imports: [SomeComponent],
  template: `
    <app-some [user]="user"/>
    <!-- <p>{{user.firstName}}</p> -->
  `,
  styles: ``
})
export class Zone2 {
  user = { firstName: 'John', lastName: 'Doe' };

  constructor() {
    setTimeout(() => {
      //this.user.firstName = 'Alex';
      //console.log('executado....');
      this.user = {...this.user, firstName: 'Alex'};
    }, 1_000);
  }
}
