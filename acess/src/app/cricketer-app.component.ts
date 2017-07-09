import { ICricketList } from './interface/cricketer-list';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './cricketer-app.component.html',
  styleUrls: ['./cricketer-app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class AppComponent implements OnInit {

  cricketersArray: ICricketList[] = []

  /**Public variable */
  firstName: string;
  lastName: string;
  favShot: string;
  batmanBowler: string;
  cricketerDetail: ICricketList;
  submitted: boolean = false;

  ngOnInit() {  }

  /**Add a cricket */
  addCricketer(first, last, shot, batsmanBowler) {
    this.submitted = true;
    this.cricketerDetail = {
      firstName: first,
      lastName: last,
      favShot: shot,
      batsmanBowler: batsmanBowler
    };

    /**Push value into array */
    this.cricketersArray.unshift(this.cricketerDetail);
  }

}
