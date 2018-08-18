import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from '@angular/core'

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { //renderer для работы с приложухой
  }

  @Input('appBackground') hoverColor: string = 'green';
  @Input() defaultColor: string = 'transparent';

  //@HostBinding('style.backgroundColor') background: string; - кор запись

  // директива ngOnInit или Destroy
  ngOnInit () {
    this.background = this.defaultColor;
    // this.element.nativeElement.style.backgroundColor = 'red'; - плохой тон
  }

  //прослушка событий
  @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
    // console.log(event) - но он нам не нужен
    // const{nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'backgroundColor', 'red');
    // this.renderer.addClass(nativeElement, 'classCSS');
    //this.background = 'green'; - кор запись
    this.background = this.hoverColor;
  }

  @HostListener('mouseleave', ['$event']) mouseLeave(event: Event) {
    // console.log(event) - но он нам не нужен
    // const{nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'backgroundColor', 'transparent');
    // this.renderer.removeClass(nativeElement, 'classCSS');
    //this.background = 'transparent'; - кор запись
    this.background = this.defaultColor;
  }

  // генерить директиву ng g d название

}