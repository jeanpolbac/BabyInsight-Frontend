import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authenticationService: AuthenticationService) {
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
        // Load dashboard if successful
      },
      error: error => {
        console.log('Registration failed', error);
        // show an error message to the user
      }
    });
  }
}
