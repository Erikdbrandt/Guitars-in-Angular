import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Guitar} from "../models/guitar.model";
import {finalize} from "rxjs";


const {apiGuitars} = environment;

@Injectable({
  providedIn: 'root'
})
export class GuitarCatalogueService {


  private _guitars: Guitar[] = [];
  private _error: string = '';
  private _loading: boolean = false;


  get guitars(): Guitar[] {
    return this._guitars;
  }

  get error(): string {
    return this._error;
  }

  get loading(): boolean {
    return this._loading;
  }



  constructor(private readonly http: HttpClient) {
  }


  public findAllGuitars(): void {
    this._loading = true;
    this.http.get<Guitar[]>(apiGuitars)
      .pipe(
        finalize(() => {
          this._loading = false;
        })
      )
      .subscribe({
        next: (guitars: Guitar[]) => {
          this._guitars = guitars;
        },
        error: (error: HttpErrorResponse) => {
          this._error = error.message;
        }
      })
  }
}
