import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/users/user.component';
import { PraticeComponentComponent } from './components/pratice-component/pratice-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { TemplateDrivenComponent } from './components/forms/template-driven/template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PraticeComponentComponent,
    NavbarComponent,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 