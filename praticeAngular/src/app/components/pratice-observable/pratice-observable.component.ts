import { Component, OnInit } from '@angular/core';
import {ObservableDataService } from '../../service/observable-data.service';
import { from } from 'rxjs';
import { User } from 'src/app/module/user';

@Component({
  selector: 'app-pratice-observable',
  templateUrl: './pratice-observable.component.html',
  styleUrls: ['./pratice-observable.component.css']
})
export class PraticeObservableComponent implements OnInit {
  users: User[];



  constructor(private observeData : ObservableDataService) { }

  // this.observeData.

  ngOnInit(): void {
    this.observeData.getUsers().subscribe(data =>{
      this.users = data;
      console.log(">>>>>>>>>>inside subscriber>>>>>>>>>>>>>>",this.users);
    })

  }

}
