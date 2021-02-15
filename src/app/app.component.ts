import { Component ,Renderer2,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'box-app';
  count:number =0;
  constructor (private renderer: Renderer2,private el : ElementRef) { }

  generateBox(){
    console.log("button clicked");
    // Use Angular's Renderer2 to create the div element
    const newBox = this.renderer.createElement('div');
     // Set the id of the div
    this.count++;
    this.renderer.setProperty(newBox,'id',this.count);

    this.renderer.addClass(newBox,'box');
    this.renderer.listen(newBox,'click',(event)=>{
      this.moveBox(event);
    })
    
    // Append the created div to the body element
    console.log(document.body);
    this.renderer.appendChild(document.body, newBox);
    
  }

  moveBox(event){
    console.log(event);
    if(event.keyCode ===39){
      console.log("right arroe pressed");
    }
  }

}
