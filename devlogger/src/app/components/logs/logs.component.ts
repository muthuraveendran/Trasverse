import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';
import { from } from 'rxjs';
import { Log } from 'src/app/models/Log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs;
  selectedLog;
  isLoaded: boolean = false;

  // logs: {
  //   id:string,
  //   text:string,if
  //   date:any
  // } [];

  constructor(private logservice : LogService) { }

  ngOnInit(): void {
    {
this.logservice.getlog().subscribe(logs =>{
  this.logs =logs;
});      
this.logservice.stateClear.subscribe(clear =>{
  if(clear){
    this.selectedLog = {id:"",text:"", date:""}
  }
})
    }
  }

  onSelect(log){
    this.logservice.setFormLog(log);
    this.selectedLog = log;
    // console.log("The log is !!!!!!!!!!!!!!!!!!",log);
  }

  onDelete(data){
    this.logservice.deleteLog(data);
  }

}
