import { Injectable } from "@angular/core"
import { Subject, Observable } from 'rxjs'
import { IEvent } from "./event.model"


@Injectable()
export class EventService {
  getEvents():Observable<IEvent[]> {
    let subject = new Subject<IEvent[]>()
    setTimeout(() => {subject.next(EVENTS); subject.complete()}, 1000)
    return subject
  }

  getEvent(id:number) {
    return EVENTS.find(event => event.id === id)
  }

  saveEvent(event:any) {
    event.id = String(Date.now())
    event.session = []
    EVENTS.push(event)
  }
}


const EVENTS:IEvent[] = [
  {
    id: 1,
    name: 'Angular Connect',
    date: new Date('9/26/2022'),
    time: '10:00 am',
    price: 59.99,
    imageUrl: '/assets/angularconnect-shield.png',
    location: {
      address: '345 Bleaker Beaker',
      city: 'London',
      country: 'England'
    },
    sessions: [ 
      {
        id: 2,
        name: 'name of somethihng',
        presenter: 'it is me',
        duration: 3,
        level: 'beginner',
        abstract: 'do i have toes? yes or no'
      }
    ]
  }
]