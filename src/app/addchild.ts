import { ClassStmt } from '@angular/compiler';
import {Directive,Renderer2,ElementRef,HostListener} from '@angular/core';

@Directive({
    selector : '[appChild]'
})

export class AppChild{
    count:number = 0
    @HostListener('click') onClick(){
        const newBox = this.render.createElement('div');
        this.render.appendChild(document.body,newBox);
        this.count++
        this.render.setProperty(newBox, 'id',this.count);
        console.log(this.el.nativeElement);
        const newBoxId = document.getElementById('newBox');
        console.log(newBoxId);
    }
     
     
    constructor(private render:Renderer2,private el:ElementRef){}

}