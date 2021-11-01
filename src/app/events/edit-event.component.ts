import { Component, OnInit } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, Router } from "@angular/router";
import { EventService } from "./shared";


@Component({
  templateUrl: './edit-event.component.html',
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
export class EditEventComponent implements OnInit {
  isDirty:boolean = true
  editEventForm!:FormGroup
  event:any
  constructor(private router:Router, private eventService:EventService, private route:ActivatedRoute){

  }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
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