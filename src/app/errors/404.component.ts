import { Component } from "@angular/core";

@Component({
  template: `
  <div class='container'>
    <h1>404 Error</h1>
    <div>
      <p>I'm sorry, but you've reached this page by mistake. The page you were trying to go to doesn't exist...
      <p><a [routerLink]="['/events']">Click here </a>to go back to the Home page.</p>
    </div>
  </div>
  `,
})

export class ErrorComponent {
  constructor() {
    
  }
}