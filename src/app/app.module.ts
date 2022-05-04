import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from "./material/material.module";
import {CustomTheme} from "./material/custom-theme";
import {FirebaseModule} from "./firebase/firebase.module";
import {FirebaseBackend} from "./firebase/firebase.backend";




@NgModule({
  declarations: [
    AppComponent,
    CustomTheme,
    FirebaseBackend
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule, // Module Material Angular
    FirebaseModule, // Module de Firebase


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
