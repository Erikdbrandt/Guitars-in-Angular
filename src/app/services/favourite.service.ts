import {Injectable} from '@angular/core';
import {GuitarCatalogueService} from "./guitar-catalogue.service";
import {UserService} from "./user.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Guitar} from "../models/guitar.model";
import {User} from "../models/user.model";
import {finalize, Observable, tap} from "rxjs";

const {apiKey, apiUsers} = environment;

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  private _loading: boolean = false;

  get loading(): boolean {
    return this._loading;
  }


  constructor(
    private http: HttpClient,
    private readonly guitarService: GuitarCatalogueService,
    private readonly userService: UserService,
  ) {
  }


  // Get the guitar based on the id


  // Patch request with the userId and the guitar

  public addToFavourites(guitarId: string): Observable<User> {


    if (!this.userService.user) {
      throw new Error("addToFavourites: There is no user")
    }
    const user: User = this.userService.user;
    const guitar: Guitar | undefined = this.guitarService.guitarById(guitarId);

    if (!guitar) {
      throw new Error("addToFavourites: no guitar with id: " + guitarId)
    }

    if (this.userService.inFavourites(guitarId)) {
      throw new Error("addToFavourites: guitar already in favourites")
    }

    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': apiKey
    })

    this._loading = true;
    return this.http.patch<User>(`${apiUsers}/${user.id}`, {
      favourites: [...user.favourites, guitar]
    }, {
      headers
    }).pipe(
      tap((updatedUser: User) => {
        this.userService.user = updatedUser;
      }),
      finalize(() => {
        this._loading = false;
      })
    )
  }

}
