import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ContactDetailsPageComponent } from '../pages/contact-details-page/contact-details-page.component';
import { ContactPageComponent } from '../pages/contact-page/contact-page.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ContactEditPageComponent } from '../pages/contact-edit-page/contact-edit-page.component';
import { SignupComponent } from 'src/pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'contacts',
    component: ContactPageComponent
  },
  {
    path: 'edit',
    component: ContactEditPageComponent
  },
  {
    path: 'edit/:id',
    component: ContactEditPageComponent
  },
  {
    path: 'details/:id',
    component: ContactDetailsPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
