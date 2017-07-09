import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Empcomponent} from './model/emp.app';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/Forms';
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
