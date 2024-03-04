import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root', // Adjust if needed
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // Add this line
  standalone: true
})
export class AppComponent {
  title = 'angular-products-app';
}
