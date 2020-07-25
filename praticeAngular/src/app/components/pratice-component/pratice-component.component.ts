import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/module/user';
import { DataService } from '../../service/data.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-pratice-component',
  templateUrl: './pratice-component.component.html',
  styleUrls: ['./pratice-component.component.css'],
})
export class PraticeComponentComponent implements OnInit {
  users: User[];


  //Pass the name of the form

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    age: null,
    balance: null,
  };
  showExtended: boolean = false;
  loaded: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form : any;

  constructor( private dataService : DataService) {}

  ngOnInit(): void {
   
      this.users =  this.dataService.getUsers();

    this.loaded = true;
    // },2000)

    // this.newData({
    //   firstName: 'aj',
    //   lastName: 'anand',
    //   email: 'ajayanand@gmailcom',
    //   age: 23,
    //   balance: 1000,
    //   hide: true,
    // });
  }

  // newData(user: User) {
  //   this.users.push(user);
  // }

  // addUser() {
  //   this.user.hide = true;

  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     age: null,
  //     balance: null,
  //   };
  // }

  clickEvent(e) {
    console.log('The type of the event is ', e.type);
  }

  toogleValue(user: User) {
    user.hide = !user.hide;
    console.log('>>>>>>>>>>>>>>>>>>>useruseruser>>>>>>>>>>>', user.hide);
  }
  onSubmit({value , valid} ){
    // if(!valid){
      console.log("Form is not vaasaaaaaaaaaaaaaaaaalid")
    // }
    // else{
      this.user.hide = true;

      // this.users.unshift(value);
      this.dataService.addUser(value);
      this.form.reset();
    // }
  }

}
