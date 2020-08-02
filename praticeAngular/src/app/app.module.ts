import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/users/user.component';
import { PraticeComponentComponent } from './components/pratice-component/pratice-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { TemplateDrivenComponent } from './components/forms/template-driven/template-driven.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { PraticeFormComponent } from './components/forms/pratice-form/pratice-form.component';
import { AppValidationComponent } from './components/forms/app-validation/app-validation.component';
import { FormComponent } from './dummy/form/form.component';
import { ValidationComponent } from './dummy/validation/validation.component';
import { PraticeObservableComponent } from './components/pratice-observable/pratice-observable.component';
import { PostComponent } from './components/post/post.component';
import { PostformComponent } from './components/postform/postform.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PraticeComponentComponent,
    NavbarComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    PraticeFormComponent,
    AppValidationComponent,
    FormComponent,
    ValidationComponent,
    PraticeObservableComponent,
    PostComponent,
    PostformComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 