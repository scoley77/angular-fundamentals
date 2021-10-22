import { Component } from "@angular/core";

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
  </div>
  `
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2022',
    time: '10:00 am',
    price: 59.99,
    imageUrl: '/assets/images/angulatconnect-shield.png',
    location: {
      address: '345 Bleaker Beaker',
      city: 'London',
      country: 'England'
    }
  }

  handleEventClicked(data) {
    console.log('received: ', data)
  }
}