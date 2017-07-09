import {Component} from '@angular/core';
import {Empdetails} from '../models/emp';
@Component({
    selector:'emp-root',
    templateUrl:'../views/emp.html'
})

export class Empcomponent
{
    title ='app';
    empobj:Empdetails=new Empdetails();
    show=false;

    toggleshow()
    {
        this.show=!this.show;
    }
}
 