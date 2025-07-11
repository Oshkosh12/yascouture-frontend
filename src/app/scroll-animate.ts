import { Directive, ElementRef, Renderer2, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
})
export class ScrollAnimateDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'animate');
          observer.unobserve(this.el.nativeElement);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(this.el.nativeElement);
  }
}
