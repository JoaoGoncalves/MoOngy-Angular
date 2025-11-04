import { Directive, ElementRef, inject, InjectionToken, Input } from '@angular/core';

export const TruncateLimit = new InjectionToken<number>('TruncateLimit');


@Directive({
  selector: '[appTruncate]'
})
export class Truncate {

  @Input() limit = inject(TruncateLimit, {self: true, optional: true}) ?? 180;
  private readonly elRef = inject(ElementRef);

  ngAfterViewInit(): void {
    this.elRef.nativeElement.textContent = this.elRef.nativeElement.textContent.slice(0, this.limit)
    
  }
  

}
