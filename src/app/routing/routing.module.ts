import { NgModule } from '@angular/core';
import {SigninComponent} from "../auth/signin/signin.component";
import {SignupComponent} from "../auth/signup/signup.component";
import {RouterModule, Routes} from "@angular/router";

// Le routing de navigation
const appRoutes: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},

];


@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class RoutingModule { }
