import {Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appCor]'
})
export class CorDirective implements OnInit, OnChanges {
  @Input()
  corTexto: string;


  @Output()
  timeout: EventEmitter<string> = new EventEmitter<string>();

  constructor(private element: ElementRef) { }

  @Input()
  set tempo(valor) {
    console.log(valor);
    if (valor) {
      setTimeout(() => {
        this.timeout.emit('timeout' + new Date());
      }, valor);
    }
  }

  @HostListener('mouseenter')
  mudarBackground() {
    this.element.nativeElement.style.backgroundColor = 'blue';
    this.element.nativeElement.style.color = 'white';
  }

  @HostListener('mouseleave')
  removerBackground() {
    this.element.nativeElement.style.backgroundColor = 'initial';
    this.element.nativeElement.style.color = this.corTexto || 'initial';
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.corTexto) {
      this.element.nativeElement.style.color = changes.corTexto.currentValue;
    }

    // if (changes.timeout) {
    //   setTimeout(() => {
    //     this.timeout.emit('timeout' + new Date());
    //   }, changes.timeout.currentValue);
    // }
  }

}
