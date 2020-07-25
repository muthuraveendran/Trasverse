import { Injectable } from '@angular/core';
import { User } from '../module/user';


@Injectable({
  providedIn: 'root'
})
export class DataService {

users: User[];

  constructor() { 

    this.users = [
      {
        firstName: 'muthu',
        lastName: 'rave',
        email: 'muthurave@gmail.com',
        age: 60,
        balance: 5000,
        registerd: new Date(),
        hide: true,
        // image:"//lorempixel.com/600/600/pepole/2"
      },
      {
        firstName: 'rave',
        lastName: 'muthu',
        email: 'ravemuthu@gmail.com',
        age: 50,
        balance: 1000,
        registerd: new Date(),
        hide: true,
      },
    ];
  }

  getUsers():User[] { 
    console.log(">>>>>>>>>>>>>>>fetching the data from the service >>>>>>>>>>>>>>>>>>>>>>>>>....");
    return this.users;
  }


  addUser(user:User) {  
    // this.user.hide = true;

    this.users.unshift(user);
    console.log("It is now unshifting the value>>>>>>>>>>>>>>>>>>>>>>>>>")
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     age: null,
  //     balance: null,
  //   };
  }

}
