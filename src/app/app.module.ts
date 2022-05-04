import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from "./material/material.module";
import {CustomTheme} from "./material/custom-theme";
import {FirebaseModule} from "./firebase/firebase.module";
import {FirebaseBackend} from "./firebase/firebase.backend";
import { NavigationComponent } from './navigation/navigation.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {RoutingModule} from "./routing/routing.module";
import {RouterModule} from "@angular/router";




@NgModule({
  declarations: [
    AppComponent,
    CustomTheme,
    FirebaseBackend,
    NavigationComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule, // Module Material Angular
    FirebaseModule, // Module de Firebase
    RoutingModule, // Module Route



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
