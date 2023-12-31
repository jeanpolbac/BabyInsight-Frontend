import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaccine } from './vaccine.model';

@Injectable({
  providedIn: 'root',
})
export class VaccineService {
  private baseUrl = 'http://localhost:9092/api/vaccines';
  private userId = 1;

  constructor(private http: HttpClient) {}

  private getHeaders(): { headers: HttpHeaders } {
    const jwtToken = localStorage.getItem('jwt');
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      }),
    };
  }

  /**
   * Fetch administered vaccines for a specific child.
   * @param childId - The ID of the child for whom to fetch administered vaccines.
   * @returns An Observable of Vaccine[] representing the administered vaccines.
   */
  getAdministeredVaccines(childId: number): Observable<Vaccine[]> {
    const url = `${this.baseUrl}/users/${this.userId}/children/${childId}/vaccines/administered/`;
    return this.http.get<Vaccine[]>(url, this.getHeaders());
  }

  /**
   * Fetch overdue vaccines for a specific child.
   * @param childId - The ID of the child for whom to fetch overdue vaccines.
   * @returns An Observable of Vaccine[] representing the overdue vaccines.
   */
  getOverdueVaccines(childId: number): Observable<Vaccine[]> {
    const url = `${this.baseUrl}/users/${this.userId}/children/${childId}/vaccines/overdue/`;
    return this.http.get<Vaccine[]>(url, this.getHeaders());
  }

  /**
   * Fetch remaining vaccines for a specific child.
   * @param childId - The ID of the child for whom to fetch remaining vaccines.
   * @returns An Observable of Vaccine[] representing the remaining vaccines.
   */
  getRemainingVaccines(childId: number): Observable<Vaccine[]> {
    const url = `${this.baseUrl}/users/${this.userId}/children/${childId}/vaccines/remaining/`;
    return this.http.get<Vaccine[]>(url, this.getHeaders());
  }
}
