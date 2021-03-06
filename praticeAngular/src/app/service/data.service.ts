import { Injectable } from '@angular/core';
import { User } from '../module/user';
import { Observable , of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

users: User[];
data: Observable <any>;

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

  getData(){
    this.data = new Observable( observer =>{
      setTimeout(()=>{
        observer.next(1);
      },1000);
      setTimeout(()=>{
        observer.next(2);
      },2000);
      setTimeout(()=>{
        observer.next(3);
      },3000);
      setTimeout(()=>{
        observer.next({name:"muthu"});
      },4000);
    })
    return this.data;
  }

  getUsers():Observable<User[]> { 
    console.log(">>>>>>>>>>>>>>>fetching the data from the service >>>>>>>>>>>>>>>>>>>>>>>>>....");
    return of(this.users);
  }

  // getUsers():User[] { 
  //   console.log(">>>>>>>>>>>>>>>fetching the data from the service >>>>>>>>>>>>>>>>>>>>>>>>>....");
  //   return this.users;
  // }



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
