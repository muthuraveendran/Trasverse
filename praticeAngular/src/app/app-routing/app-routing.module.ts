import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PraticeObservableComponent } from '../components/pratice-observable/pratice-observable.component';
import { ReactiveFormComponent } from '../components/forms/reactive-form/reactive-form.component';
import { PostComponent } from '../components/post/post.component';
import { IdGenerateComponent } from '../id-generate/id-generate.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

const routes : Routes = [
  {path:"", component:PraticeObservableComponent},
  {path:"form", component:ReactiveFormComponent},
  {path:"post", component:PostComponent},
  {path:"posts/:id",component:IdGenerateComponent},
  {path:"**",component:PageNotFoundComponent},
];

@NgModule({
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
