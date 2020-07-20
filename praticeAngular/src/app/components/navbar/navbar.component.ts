import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
users;

  constructor() { 
    this.setCurrentClasses(); 
    this.randomColorChanger();

  }

  AddButton : boolean = true;
  greenButton : boolean = true;
  // colorChange : boolean = true;
  color: boolean = true;
  currentClasses = {};
  colorChange = {};

  ngOnInit(): void {

    this.users={
      name:"muthu",
      age:24,
      proffession:"Developer",
      hide:true,
    }
  }

  setCurrentClasses() {
    this.currentClasses ={
      'btn-success':this.AddButton,
      'big-text': this.greenButton
    }
  }

  randomColorChanger(){
    this.colorChange ={
      // 'grenBtn':this.greenButton,
      // 'redBtn':this.greenButton
    }
  }

  valueChane(){
    this.users.hide = !this.users.hide;
  }
}
