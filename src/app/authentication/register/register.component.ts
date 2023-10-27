import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
/**
 * Component for user registration.
 */
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  /**
   * Handle the form submission.
   * If passwords match, call the registration service and handle the response.
   */
  onSubmit() {
    if (this.password !== this.confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    this.authenticationService.register(this.email, this.password).subscribe({
      next: response => {
        console.log('Registration successful', response);
        // Load the dashboard if registration is successful
        this.router.navigate(['/dashboard']);
      },
      error: error => {
        console.log('Registration failed', error);
        // Show an error message to the user
      }
    });
  }
}
