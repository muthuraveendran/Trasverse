import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/module/user';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

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

  constructor() {}

  ngOnInit(): void {
    // setTimeout(()=>{
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
    this.loaded = true;
    // },2000)

    this.newData({
      firstName: 'aj',
      lastName: 'anand',
      email: 'ajayanand@gmailcom',
      age: 23,
      balance: 1000,
      hide: true,
    });
  }

  newData(user: User) {
    this.users.push(user);
  }

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
  onSubmit({value , valid} : {value: User, valid: boolean}){
    // if(!valid){
      console.log("Form is not vaasaaaaaaaaaaaaaaaaalid")
    // }
    // else{
      this.user.hide = true;

      this.users.unshift(value);
      this.form.reset();
    // }
  }
}
