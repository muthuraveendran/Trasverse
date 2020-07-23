import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-pratice-form',
  templateUrl: './pratice-form.component.html',
  styleUrls: ['./pratice-form.component.css']
})
export class PraticeFormComponent implements OnInit {

  registeredForm : FormGroup;
  submitted: boolean =false

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registeredForm = this.fb.group({
      name:["",[Validators.required,Validators.minLength]]
    })
  }

  formValidation(){
    this.submitted = true;
  }

}
