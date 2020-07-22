import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  show : boolean = true;
    submitted = false;
  registrationForm: FormGroup;

  data = {
    firstName:""
  }

  arrayData =[];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
    
            name: ["", [Validators.required, Validators.minLength(6)]],

          });
  }
  get f() { return this.registrationForm.controls; }


      submitRegistrationForm() {
        this.submitted = true;
        if (this.registrationForm.valid) {
          this.arrayData.push(this.data);
        }
      }

}
