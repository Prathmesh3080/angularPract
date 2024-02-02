import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-reference-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-reference-component.component.html',
  styleUrl: './template-reference-component.component.css'
})
export class TemplateReferenceComponentComponent {

  // getName(value:string){
  //   console.log(value);
  // }

  public displayName = '';
  getName(value:string){
    this.displayName = value;
  }

}
