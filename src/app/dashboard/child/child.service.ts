import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Child} from "./models/child.model";
import {AuthenticationService } from "../../authentication/authentication.service";
import {throwError} from "rxjs/internal/observable/throwError";
import {RequestChild} from "./models/request.child.model";

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  private baseUrl = 'http://localhost:9092/api/users';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }


  addChild(child: Child): Observable<Child> {
    const jwtToken = this.authenticationService.getJwtToken();
    const userId = this.authenticationService.getUserId().id;


    console.log('JWT Token:', jwtToken);
    console.log('User ID:', userId);

    if (jwtToken && userId) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      });
      const addChildUrl = `${this.baseUrl}/${userId}/children/`;
      return this.http.post<Child>(addChildUrl, child, { headers });
    } else {
      console.error('JWT token or userId not found');
      return throwError(() => 'JWT token or userId not found');
    }
  }

  getChildren(): Observable<RequestChild[]> {
    const jwtToken = this.authenticationService.getJwtToken();
    const userId = this.authenticationService.getUserId().id;

    if (jwtToken && userId) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      });
      const getChildrenUrl = `${this.baseUrl}/${userId}/children/`;
      return this.http.get<RequestChild[]>(getChildrenUrl, { headers });
    } else {
      return throwError(() => 'JWT token or userId not found');
    }
  }
}

