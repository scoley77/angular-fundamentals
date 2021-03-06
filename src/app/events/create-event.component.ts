import { Component } from "@angular/core";
import { FormGroup } from '@angular/forms'
import { Router } from "@angular/router";
import { EventService } from "./shared";


@Component({
  templateUrl: './create-event.component.html',
  styles: [`
    em { float:right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #ffff85; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
    .btn-primary { margin-right: 10px; }
  `]
})
export class CreateEventComponent {
  isDirty:boolean = true
  newEventForm!:FormGroup
  newEvent:any
  constructor(private router:Router, private eventService:EventService){

  }
  
  
  saveEvent(formValues:any) {
    this.eventService.saveEvent(formValues)
    this.isDirty = false
    this.router.navigate(['/events'])
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}