import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";
import { IUser } from "../user/user.model";

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    li { font-size: 15px; }
    #searchForm { margin-right: 100px; }
    @media (max-width: 1200px) { #searchForm { display: none; } }
    li > a.active { color: #F97924; background-color: #425263; }
  `]
})
export class NavBarComponent {
  currentUser!:string
  firstName!:string
  constructor(public auth:AuthService) {
    
  }
  
}
