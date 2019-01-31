import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from './user.service';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class GuestGuardService implements CanActivate {
  constructor(private userService: UserService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.currentUser
      .pipe(
        map(a => !a),
        tap(a => {
          if (!a) {
            this.router.navigate(['/']);
          }
        })
      );
  }
}
