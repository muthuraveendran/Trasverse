import { Component } from '@angular/core';
// import { User } from '../../module/user'
import { FormGroup, FormControl } from '@angular/forms';
import { from } from 'rxjs';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls:['./user.component.css'],


})

export class UserComponent {

    enable : boolean = false;
    myForm: FormGroup;


    // user : User;
    user;
    // pushNewData;

    data ={
        firstName:"",
    }

    // dataCollection = [];

    constructor() {
        // this.pushNewData =[];

        this.myForm = new FormGroup({
            name: new FormControl('Benedict'),
          });

        this.user =[{
        firstName:"muthu",
        lastName:"rave",
        email:"muthurave@gmail.com",
        age:25,
    }]
    }

    // adduser(){
    //     let newData = this.user.push(this.data);
    //     console.log(">>>>newData>>>>>>>>>>>>>>>>>>>>>>>>>>>>",newData);
    //     this.data ={
    //         firstName:"",
    //     }
    // }

    pushNewData =[];

    addData(){
        let updatedData = this.pushNewData.push(this.data);
        console.log(">>>>>>>>>>>>>>>updatedDataupdatedDataupdatedDataupdatedData>>>>>>>>>>>",this.data)
        this.data = {
            firstName:""
        }
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>pushNewDatapushNewDatapushNewData>>>>>>>>>>>>>>>>>>>",this.pushNewData)
    }

    onSubmit(form: FormGroup) {
        console.log('Valid?', form.valid); // true or false
        console.log('Name', form.value.name);
        console.log('Email', form.value.email);
        console.log('Message', form.value.message);
      }

}

