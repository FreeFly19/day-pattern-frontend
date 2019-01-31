import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {GuestRoutingModule} from './guest-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GuestRoutingModule
  ],
  declarations: [LoginComponent]
})
export class GuestModule { }
