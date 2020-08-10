import { Injectable } from '@angular/core';
// import { } from
import { Observable, of, BehaviorSubject, from } from 'rxjs';
// import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private logSource = new BehaviorSubject<any>({});
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() { }

  logs = [
    // {id:"1",text:"Generated Component",date:new Date("02-01-2020")},
    // {id:"2",text:"New Component",date:new Date("11-02-2020")},
    // {id:"3",text:"Major Component",date:new Date("01-22-2020")},
  ]


  getlog(){
    // return this.logs;
    if(localStorage.getItem('logs') === null){
      this.logs = [];
    } else {
     return this.logs = JSON.parse(localStorage.getItem('logs'));
    }
  }

  setFormLog(log) {
    this.logSource.next(log);
  }

  addlog(add){
    console.log("The add log is>>>>>>>>>>>>>>>>>>>>>>",add);
    this.logs.unshift(add);
    localStorage.setItem('logs',JSON.stringify(this.logs));
  }

  updateLog(update) {
    console.log("Inside the Update block")
    this.logs.forEach((curr,index)=>{
      console.log("Inside the Update block1" ,curr.id);
      if(update.id === curr.id){
        console.log("The update is", update.id);
        this.logs.splice(index,1);
      }   
    })
    this.logs.unshift(update);
    localStorage.setItem('logs',JSON.stringify(this.logs));
  }

  deleteLog(data){
    this.logs.forEach((curr,index)=>{
      if(data.id === curr.id){
        this.logs.splice(index,1);
      }
    });
    localStorage.setItem('logs',JSON.stringify(this.logs));
  }

  clearState(){
    this.stateSource.next(true);
  }

}
