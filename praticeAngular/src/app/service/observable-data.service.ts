import { Injectable } from '@angular/core';
import { User } from '../module/user';
import { Observable , of, Observer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ObservableDataService {

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


  // getDummyData():Observable<any>{
  //   // return of(this.newData);
  // }

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
        observer.next(4);
      },4000);
    })
    return this.data;
  }

  // Normal 
  // getUsers():User[] { 
  //   console.log(">>>>>>>>>>>>>>>fetching the data from the service >>>>>>>>>>>>>>>>>>>>>>>>>....");
  //   return this.users;
  // }

  // Using Observable
  getUsers():Observable<User[]> { 
    console.log(">>>>>>>>>>>>>>>fetching the data from the service >>>>>>>>>>>>>>>>>>>>>>>>>....");
    return of(this.users);
  }

  
}