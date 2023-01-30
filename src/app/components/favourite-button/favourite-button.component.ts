import {Component, Input, OnInit} from '@angular/core';
import {FavouriteService} from "../../services/favourite.service";
import {HttpErrorResponse} from "@angular/common/http";
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-favourite-button',
  templateUrl: './favourite-button.component.html',
  styleUrls: ['./favourite-button.component.css']
})
export class FavouriteButtonComponent implements OnInit{


  public isFavourite: boolean = false;

  @Input() guitarId: string = "";

  get loading(): boolean {
    return this.favouriteService.loading;
  }



  constructor(
    private readonly userService: UserService,
    private readonly favouriteService: FavouriteService) {
  }

  ngOnInit(): void {
    //inputs are resolved!
    this.isFavourite = this.userService.inFavourites(this.guitarId);
  }

  onFavouriteClick(): void {

    this.favouriteService.addToFavourites(this.guitarId)
      .subscribe({
        next: (response:User) => {
         this.isFavourite = this.userService.inFavourites(this.guitarId)
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message)
        }
      })
  }
}
