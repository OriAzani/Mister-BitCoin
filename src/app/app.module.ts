import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ContactService } from '../app/services/contact.service'
import { UserService } from '../app/services/user.service'
import { BitcoinService } from '../app/services/bitcoin.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFilterComponent } from '../components/contact-filter/contact-filter.component';
import { ContactListComponent } from '../components/contact-list/contact-list.component';
import { ContactPreviewComponent } from '../components/contact-preview/contact-preview.component';
import { InputComponent } from '../components/input/input.component';
import { HeaderComponent } from '../components/header/header.component';
import { TransferFundComponent } from '../components/transfer-fund/transfer-fund.component';
import { MovesListComponent } from '../components/moves-list/moves-list.component';

import { ContactDetailsPageComponent } from '../pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from '../pages/contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from '../pages/contact-page/contact-page.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { SignupComponent } from '../pages/signup/signup.component';

import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    InputComponent,
    ContactDetailsPageComponent,
    ContactEditPageComponent,
    ContactPageComponent,
    HomePageComponent,
    DashboardComponent,
    TransferFundComponent,
    SignupComponent,
    HeaderComponent,
    MovesListComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    FormsModule
  ],
  providers: [ContactService,UserService,BitcoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
