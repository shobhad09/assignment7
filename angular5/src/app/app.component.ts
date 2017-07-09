import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  empdetails=[
    {id:101,name:'shobha'},
    {id:102,name:'Deepa'},
    {id:103,name:'john'}

  ]
}
