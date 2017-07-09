import { Directive, ElementRef } from '@angular/core'

@Directive({
    selector: '[colorChanger]',
    inputs: ['bgColor','colour:colorChanger']
})

export class ColorChangeDirective {
    constructor(private e1: ElementRef) {
        this.e1 = e1;
    }
    set colour(color: string) {
        this.e1.nativeElement.style.color = color;
    }
    set bgColor(color: string) {
        this.e1.nativeElement.style.backgroundColor = color;
    }
}