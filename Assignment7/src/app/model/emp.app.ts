import {Component} from '@angular/core';
import {Empdetails} from '../view/emp';
@Component({
    selector:'emp-root',
    templateUrl:'../view/emp.app.html',
})

export class Empcomponent
{
    empobj:Empdetails=new Empdetails();
    show=false;
     toggleshow()
    {
        this.show=!this.show;
    }
}
 

