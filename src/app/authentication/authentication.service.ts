import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Service for handling user authentication and authorization.
 */
export class AuthenticationService {

  // Define the base URL for the backend API
  private baseUrl = 'http://localhost:9092';

  private userId!: number;

  private jwtToken: string | null = null;

  constructor(private http: HttpClient) {
    this.jwtToken = localStorage.getItem('jwtToken');
  }

  /**
   * Perform user login.
   *
   * @param email - The user's email address.
   * @param password - The user's password.
   * @returns An Observable with the login result or an error.
   */
  login(email: string, password: string): Observable<any> {
    const authInfo = { emailAddress: email, password: password };
    return this.http.post(`${this.baseUrl}/auth/users/login/`, authInfo).pipe(
      tap((response: any) => {
        if (response.jwt) {
          localStorage.setItem('jwt', response.jwt);
          this.userId = response.user; // Set the userId property
        }
      })
    );
  }

  /**
   * Register a new user.
   *
   * @param email - The user's email address.
   * @param password - The user's password.
   * @returns An Observable with the registration result or an error.
   */
  register(email: string, password: string): Observable<any> {
    const authInfo = { emailAddress: email, password: password };
    return this.http.post(`${this.baseUrl}/auth/users/register/`, authInfo).pipe(
      catchError((error: HttpErrorResponse) => {
        // Log the error
        console.error('Registration failed:', error);
        // Return an observable with the error
        return throwError(() => error);
      })
    );
  }

  /**
   * Get the JWT token.
   *
   * @returns The JWT token or null if not available.
   */
  getJwtToken(): string | null {
    return this.jwtToken;
  }

  /**
   * Get the user's ID.
   *
   * @returns The user's ID or null if not available.
   */
  getUserId(): any | null {
    return this.userId;
  }
}
