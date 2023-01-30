import { Injectable } from '@angular/core';
import {User} from "../models/user.model";
import {StorageUtil} from "../utils/storage.util";
import {StorageKeys} from "../emums/storage-keys.enum";
import {Guitar} from "../models/guitar.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user?: User;

  get user(): User | undefined {
    return this._user;
  }

  set user(user ){
    StorageUtil.storageSave<User>(StorageKeys.User, user!);
    this._user = user;
  }
  constructor() {
    this._user = StorageUtil.storageRead<User>(StorageKeys.User);
  }

  public inFavourites(guitarId: string): boolean {
    if(this.user){
      return  Boolean(this._user?.favourites.find((guitar: Guitar) => guitar.id === guitarId));
    }
    return false;
  }
}

