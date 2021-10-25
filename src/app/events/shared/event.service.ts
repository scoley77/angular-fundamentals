import { Injectable } from "@angular/core"

@Injectable()
export class EventService {
  getEvents() {
    return EVENTS
  }

  getEvent(id:number) {
    return EVENTS.find(event => event.id === id)
  }
}


const EVENTS = [
  {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2022',
    time: '10:00 am',
    price: 59.99,
    imageUrl: '/assets/angularconnect-shield.png',
    location: {
      address: '345 Bleaker Beaker',
      city: 'London',
      country: 'England'
    }
  }
]