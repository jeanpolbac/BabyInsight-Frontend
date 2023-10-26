import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Child} from "./models/child.model";
import {AuthenticationService } from "../../authentication/authentication.service";
import {throwError} from "rxjs/internal/observable/throwError";

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  private baseUrl = 'http://localhost:9092/api/users';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }


  addChild(child: Child): Observable<Child> {
    const jwtToken = this.authenticationService.getJwtToken();
    const userId = this.authenticationService.getUserId();

    if (jwtToken && userId) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      });
      const addChildUrl = `${this.baseUrl}/api/users/${userId}/children/`;

      return this.http.post<Child>(addChildUrl, child, { headers });
    } else {
      console.error('JWT token or userId not found');
      return throwError(() => 'JWT token or userId not found');
    }
  }

}

