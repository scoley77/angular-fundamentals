import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
  templateUrl: './profile.component.html',
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
export class ProfileComponent implements OnInit {
  profileForm!:FormGroup
  private firstName!:FormControl
  private lastName!:FormControl

  constructor(private authService:AuthService, private router:Router) {

  }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, Validators.required)
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(formValues:any) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['events'])
    }
  }

  validateLastName() {
    return this.lastName.invalid && this.lastName.touched
  }

  validateFirstName() {
    return this.firstName.invalid && this.firstName.touched
  }

  cancel() {
    this.router.navigate(['events'])
  }
}