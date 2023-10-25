import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:9092/';
  constructor(private http: HttpClient) { }


  login(email: string, password: string) {
    return this.http.post(this.baseUrl + 'auth/users/login/', { email, password })
  }
}
