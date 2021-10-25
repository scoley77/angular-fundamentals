import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  template: `
    <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
      <h3>[form goes here]</h3>
      <br/>
      <br/>
      <button (click)="handleCreateClick()" type="submit" class="btn btn-primary">Save</button>
      <button (click)="cancel()" type="button" class="btn btn-default">Cancel</button>
    </div>
  `
})
export class CreateEventComponent {
  constructor(private router: Router){

  }
  handleCreateClick() {

  }
  cancel() {
    this.router.navigate(['/events'])
  }
}