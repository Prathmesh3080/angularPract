import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  public value:number = 0;
  
  public counter(str:string){

    (str === 'add') ? this.value++ :this.value--;

  }

}
