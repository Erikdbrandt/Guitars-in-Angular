import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";
import {Guitar} from "../../models/guitar.model";



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css']
})
export class ProfilePage {



  get user(): User | undefined {
    return this.userService.user;
  }

  get favourites(): Guitar[] {
    if(this.userService.user) {
      return this.userService.user.favourites;
    }
    return [];
  }

  constructor(
    private readonly userService: UserService,
  ) { }

}
