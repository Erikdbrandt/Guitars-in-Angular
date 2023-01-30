import {Component, Input} from '@angular/core';
import {FavouriteService} from "../../services/favourite.service";
import {HttpErrorResponse} from "@angular/common/http";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-favourite-button',
  templateUrl: './favourite-button.component.html',
  styleUrls: ['./favourite-button.component.css']
})
export class FavouriteButtonComponent {


  @Input() guitarId: string = "";

  get loading(): boolean {
    return this.favouriteService.loading;
  }


  constructor(private readonly favouriteService: FavouriteService) {
  }


  onFavouriteClick(): void {

    this.favouriteService.addToFavourites(this.guitarId)
      .subscribe({
        next: (response:User) => {
          console.log("NEXT: ", response)
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message)
        }
      })
  }
}
