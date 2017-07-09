import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {Empcomponent} from './models/emp.comp.app';
@NgModule({
  declarations: [
    AppComponent,
    Empcomponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [Empcomponent]
})
export class AppModule { }
