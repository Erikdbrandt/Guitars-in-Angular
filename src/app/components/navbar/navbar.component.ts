import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  get user(): User | undefined {
    return this.userService.user;
  }

  constructor(
    private readonly userService: UserService
  ) {
  }

}
