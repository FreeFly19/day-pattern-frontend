import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

class UserDto {
  id: number;
  login: string;
  email: string;
  firstName: string;
  lastName: string;

  constructor(props?) {
    Object.assign(this, props);
  }
}

@Injectable()
export class UserService {
  currentUser: BehaviorSubject<UserDto>;

  constructor() {
    this.currentUser =
      new BehaviorSubject(window.localStorage.currentUser && new UserDto(JSON.parse(window.localStorage.currentUser)));
  }

  signIn(login, password): Observable<UserDto> {
    if (login === 'freefly19' && password === '12345678') {
      const userDto = new UserDto();
      userDto.id = 1;
      userDto.login = 'freefly19';
      userDto.email = 'oleksandr.melnyk19@gmail.com';
      userDto.firstName = 'Alex';
      userDto.lastName = 'Melnyk';
      this.currentUser.next(userDto);
      window.localStorage.currentUser = JSON.stringify(userDto);
      return Observable.of(userDto);
    }
    return Observable.of(null);
  }
}
