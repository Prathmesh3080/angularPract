import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  public name = "";

  // myEvent(){
  //   //alert('Welcome to Angular.....');  //Event handler with button click
  //   //console.log("Welcome to Angular.....");
  //   this.name = 'Prathmesh Patil';
  // }

  // myEvent(name:string, age:number){  //Event handler with parameter

  //     alert(name + "-"+ age);
  // }

  // myEvent(event:any){  //Event Handler Object 
  //   console.log(event.type);
  //   console.log(event);
  // }

  myEvent(){
    console.log("hello");
  }

}
