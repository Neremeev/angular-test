import {Directive, ElementRef, HostListener, OnInit, Renderer2, HostBinding, Input} from "@angular/core";

@Directive({
  selector: '[appBackground]',
})


export class BackgroundDirective implements OnInit {

  @Input() hoverColor: string = 'green';
  @Input() defaultColor: string = 'transparent';

  @HostBinding('style.backgroundColor') background: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.background = this.defaultColor;
  }


  @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
    this.background = this.hoverColor;
  }

  @HostListener('mouseleave', ['$event']) mouseLeave(event: Event) {
    this.background = this.defaultColor;
  }


  //Директива пользуется двумя жц OnInit и OnDestroy
}