import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Child } from "./models/child.model";
import { AuthenticationService } from "../../authentication/authentication.service";
import { throwError } from "rxjs/internal/observable/throwError";
import { RequestChild } from "./models/request.child.model";

@Injectable({
  providedIn: 'root'
})
/**
 * Service for managing child-related operations.
 */
export class ChildService {
  private baseUrl = 'http://localhost:9092/api/users';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  /**
   * Adds a new child to the user's list of children.
   * @param child - The child to be added.
   * @returns An Observable with the added child.
   */
  addChild(child: Child): Observable<Child> {
    const jwtToken = this.authenticationService.getJwtToken();
    const userId = this.authenticationService.getUserId().id;

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

  /**
   * Retrieves a list of children belonging to the user.
   * @returns An Observable with the list of children.
   */
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

  /**
   * Retrieves detailed information about a child by ID.
   * @param id - The ID of the child to retrieve.
   * @returns An Observable with the child's details.
   */
  getChildById(id: number): Observable<RequestChild> {
    const jwtToken = this.authenticationService.getJwtToken();
    const userId = this.authenticationService.getUserId().id;

    if (jwtToken && userId) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      });
      const url = `${this.baseUrl}/${userId}/children/${id}/`;

      return this.http.get<RequestChild>(url, { headers });
    } else {
      return throwError(() => 'JWT token or userId not found');
    }
  }
}
