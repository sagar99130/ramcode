import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo'; 
  isLogin =  localStorage.getItem('isUserLoggedIn');

  constructor(private router : Router) { 
  }

  logout() {
    // remove user from local storage to log user out
      localStorage.removeItem('isUserLoggedIn');
      alert('You are successfully logout.');
      this.router.navigate(['home']);
  }
}
