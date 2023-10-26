import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
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
    const authInfo = {emailAddress: email, password: password};

    // Set the headers for the HTTP request
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Set the Content-Type header to JSON
    });
    // Make an HTTP POST request to the login endpoint
    return this.http.post(`${this.baseUrl}/auth/users/login/`, authInfo, { headers })
      .pipe(
        catchError(error => {
          // Log and rethrow any errors that occur during login
          console.log(`Login failed: ${error.status}`);
          return throwError(() => error);
        })
      );
  }


  /**
   * Register a new user
   *
   * @param email - The user's email address
   * @param password - The user's password
   * @returns An Observable with the registration result or an error
   */
  register(email: string, password: string): Observable<any> {
    const authInfo = {emailAddress: email, password: password};
    return this.http.post(`${this.baseUrl}/auth/users/register/`, authInfo)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // Log the error
          console.error('Registration failed:', error);
          // Return an observable with the error
          return throwError(() => error);
        })
      );
  }
}
