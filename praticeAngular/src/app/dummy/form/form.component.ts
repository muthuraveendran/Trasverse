import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registeredForm: FormGroup;

  constructor(private formbuilder : FormBuilder) { }

   validate= false;


  ngOnInit(): void {
    this.registeredForm = this.formbuilder.group({
      name: ['', Validators.required],
  
    });  
  }

  add() {
    this.validate= true;
  }

}
