import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";




// constante array qui contient toute les commandes materialModules
const MaterialComponents = [
  BrowserAnimationsModule,
  ReactiveFormsModule,
  MatSlideToggleModule,
  MatIconModule,
  MatToolbarModule,];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
