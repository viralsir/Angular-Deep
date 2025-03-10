import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {EventBindingComponent} from '../event-binding/event-binding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventBindingComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Deep';
}
