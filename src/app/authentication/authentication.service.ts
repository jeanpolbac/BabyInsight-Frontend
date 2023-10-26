import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import {catchError, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // Define the base URL for the backend API
  private baseUrl = 'http://localhost:9092';

  constructor(private http: HttpClient) { }

  /**
   * Perform user login
   *
   * @param email - The user's email address
   * @param password - The user's password
   * @returns An Observable with the login result or an error
   */
  login(email: string, password: string): Observable<any> {
    // Create an object containing the user's email and password
    const authInfo = {email, password};

    // Make an HTTP POST request to the login endpoint
    return this.http.post(`${this.baseUrl}/auth/users/login/`, authInfo)
      .pipe(
        catchError(error => {
          // Log and rethrow any errors that occur during login
          console.log(`Login failed: ${error.status}`);
          return throwError(error);
        })
      );
  }
}
