import {Component, EventEmitter, Output} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {NgForm} from "@angular/forms";
import {User} from "../../models/user.model";

import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {


  @Output() login: EventEmitter<void> = new EventEmitter<void>();


  // dependency injection

  constructor(
    private readonly userService: UserService,
    private readonly loginService: LoginService) {
  }

  public loginSubmit(loginForm: NgForm): void {

    //username
    const {username} = loginForm.value;

    this.loginService.login(username)
      .subscribe({
        next: (user: User) => {
          this.userService.user = user;
          this.login.emit();
        },
        error: (error) => {

        }
      })

  }
}
