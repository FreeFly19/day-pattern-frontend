import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {GuestGuardService} from './core/guest-guard.service';
import {HomeGuardService} from './core/home-guard.service';


@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', loadChildren: './home/home.module#HomeModule', canActivate: [HomeGuardService]},
    {path: 'guest', loadChildren: './guest/guest.module#GuestModule', canActivate: [GuestGuardService] }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
