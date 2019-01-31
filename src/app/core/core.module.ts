import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GuestGuardService} from './guest-guard.service';
import {HomeGuardService} from './home-guard.service';
import {UserService} from './user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    HomeGuardService,
    GuestGuardService,
    UserService
  ],
  exports: [
  ]
})
export class CoreModule { }
