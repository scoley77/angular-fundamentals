import { Injectable } from "@angular/core";
import { UnsubscriptionError } from "rxjs";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
  currentUser!:IUser
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: 'userrr',
      firstName: 'sara',
      lastName: 'hajaja',
      password: 'password'
    }
  }
  isAuthenticated() {
    return !!this.currentUser;
  }
}