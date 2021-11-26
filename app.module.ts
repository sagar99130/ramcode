import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestSagarComponent } from './test-sagar/test-sagar.component';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

//import FormsModule here
import { FormsModule } from '@angular/forms';
//import ReactiveFormsModule here
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { LogoutComponent } from './logout/logout.component';

import { HttpClientModule } from '@angular/common/http';

// import {AuthapiService} from './services/authapi.service';


@NgModule({
  declarations: [
    AppComponent,
    TestSagarComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent,
    ServiceComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // AuthapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
