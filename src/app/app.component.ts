import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventsComponent } from './events/events.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TemplateReferenceComponentComponent } from './template-reference-component/template-reference-component.component';
import { CounterComponent } from "./counter/counter.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        UserComponent,
        InterpolationComponent,
        EventsComponent,
        StyleBindingComponent,
        TemplateReferenceComponentComponent,
        CounterComponent
    ]
})
export class AppComponent {
  title = 'angularPract';
}
