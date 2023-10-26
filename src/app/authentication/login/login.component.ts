import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  onSubmit() {
    if (this.email && this.password) {
      this.authenticationService.login(this.email, this.password).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.log('Login failed', error);
          // show an error message to the user
        }
      });
    } else {
      console.log('Email and password are required');
      // show error message to the user here
    }
  }
}





