import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee-app.component'
import { GridComponent } from './grid.component'
import { ColorChangeDirective } from './Directives/color-change.directive'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    GridComponent,
    ColorChangeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    EmployeeComponent
  ]
})
export class AppModule { }
