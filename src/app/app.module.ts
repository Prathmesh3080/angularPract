import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { EventsComponent } from './events/events.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserComponent,
    EventsComponent,
    StyleBindingComponent
  ]
})
export class AppModule { }
