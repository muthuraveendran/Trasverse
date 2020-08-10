import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id:string;
  text:string;
  date:any;
  isAdd: boolean = true;


  constructor(private logservice: LogService) { }

  ngOnInit() {
    this.logservice.selectedLog.subscribe(log =>{
      if(log.id!== null){
        this.isAdd = false;
        this.id = log.id,
        this.text = log.text;
      }
    })
  }

  onSubmit(){
    
    if(this.isAdd){
    const data ={
      id: this.generateId(),
      text:this.text,
      date: new Date() 
    }
    this.logservice.addlog(data);
  } 
  else {
    const updateData ={
      id: this.id,
      text:this.text,
      date: new Date() 
    }
    console.log("else block inside the ", updateData.id)
    this.logservice.updateLog(updateData);
  }
  this.clearText();
}

clearText(){
  this.isAdd = true;
  this.id = '';
  this.text = '';
  this.date = ''
  this.logservice.clearState();

}

  generateId(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = parseFloat('0.' + Math.random().toString().replace('0.', '') + new Date().getTime()) * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
  }



}
