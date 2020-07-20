import { Component } from '@angular/core';
import { User } from '../../module/user'
import { from } from 'rxjs';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls:['./user.component.css'],


})

export class UserComponent {

    user : User;
    // user;
    constructor() {
        this.user ={
        firstName:"muthu",
        lastName:"rave",
        email:"muthurave@gmail.com",
        age:25,
    }
    }

}

