import {Injectable} from '@angular/core';
import {map, Observable, of, switchMap} from "rxjs";
import {User} from "../models/user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";


const {apiUsers} = environment
const {apiKey} = environment


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //dependency injection
  constructor(private readonly http: HttpClient) {
  }


  public login(username: string): Observable<User> {

    return this.checkUsername(username)
      .pipe(
        switchMap((user: User | undefined) => {
          if (user === undefined) {
            return this.createUser(username);
          }
          return of (user);

        })
      )
  }

  // Login

  // check if user exists

  private checkUsername(username: string): Observable<User | undefined> {
    return this.http.get<User[]>(`${apiUsers}?username=${username}`)
      .pipe(
        // RxJS operator
        map((response: User[]) => response.pop())
      )
  }

  // IF NOT user - create user

  private createUser(username: string): Observable<User> {
  // user

    const user = {
      username,
      favourites: []
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': apiKey
    });

    return this.http.post<User>(apiUsers, user, {
      headers})


    // headers -> api Key
    // POST - Create items on the server



  }

  // IF user - created user -> Store user
}
