import { Component, OnInit,AfterViewInit  } from '@angular/core';
import {FormControl, FormGroup, FormArray, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {AuthapiService} from '../services/authapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  userName: string;
  password: string;
  // formSubmitted : true;
  isUserLoggedIn: boolean = false;
  apiURL = "http://127.0.0.1:8000/";

    constructor(public router:Router, public authapiService: AuthapiService) { }

    //  headers = new HttpHeaders();
    // if(localStorage.getItem('access_token') != null){
    //     headers = headers.append('Authorization', 'Bearer ' +  localStorage.getItem('access_token'));
    //     headers = headers.append('Content-Type', 'application/json');
    // }
    ngOnInit() { 
    } 
  
    authFormdata = new FormGroup({ 
       email: new FormControl('', [Validators.required, Validators.minLength(3)]),
        password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      }); 

      onClickLogin(formVal){
        if(this.authFormdata.valid) {
          // this.http.post<any>(this.apiURL+'login',formVal).subscribe( res => { 
                this.authapiService.callapi('login',formVal, 'POST').subscribe( res => { 
                this.isUserLoggedIn = true;
                console.info(res);
                localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? 'true' : 'false' );
                localStorage.setItem('access_token', res.token);
          });
          console.info(formVal);
        }
      }

    resetForm(){
      this.authFormdata.reset();
    }

}
