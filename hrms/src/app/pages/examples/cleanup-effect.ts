import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-cleanup-effect',
  imports: [],
  template: `
    <h2>Window Size</h2>
    <p>Width: {{ width() }}</p>
    <p>Height: {{ height() }}</p>
  `,
  styles: ``,
})
export class CleanupEffect {
  width = signal(window.innerWidth);
  height = signal(window.innerHeight);

  constructor() {
    effect((onCleanup) => {
      console.log('%cEFFECT RUN', 'color: orange', this.width());


      const update = () => {
        // function expression nao faz hoisting
        this.width.set(window.innerWidth);
        console.log('%clistener dentro do update (cleanup)', 'color: green');
      };

      window.addEventListener('resize', update);

      onCleanup( ()=> {
        window.removeEventListener('resize', update);
      })
    });
    /* effect(() => {
      console.log('%cEFFECT RUN', 'color: orange', this.width());


      const update = () => {
        // function expression nao faz hoisting
        this.width.set(window.innerWidth);
        console.log('%clistener dentro do update (sem cleanup)', 'color: red');
      };

      window.addEventListener('resize', update);
    }); */
  }
}
