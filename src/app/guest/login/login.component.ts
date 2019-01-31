import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  signIn(login, password) {
    this.userService.signIn(login, password)
      .subscribe(user => {
        console.log(user);
        if (user) {
          this.router.navigate(['/']);
        }
      });
  }

}
