import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { VaccineService } from "../vaccine.service";
import { Vaccine } from '../vaccine.model';

@Component({
  selector: 'app-vaccine-list-overdue',
  templateUrl: './vaccine-list-overdue.component.html',
  styleUrls: ['./vaccine-list-overdue.component.css']
})
/**
 * Component for displaying overdue vaccines for a child.
 */
export class VaccineListOverdueComponent implements OnInit {
  overdueVaccines: Vaccine[] = [];
  childId!: number;

  /**
   * Constructor for the VaccineListOverdueComponent.
   * @param vaccineService - Service for fetching vaccine data.
   * @param route - ActivatedRoute for accessing route parameters.
   */
  constructor(private vaccineService: VaccineService, private route: ActivatedRoute) {}

  /**
   * Initializes the component by fetching the child ID from route parameters
   * and fetching the overdue vaccines for the child.
   */
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.childId = +params['id'];
      this.fetchOverdueVaccines();
    });
  }

  /**
   * Fetches the overdue vaccines for the child with the given ID.
   */
  fetchOverdueVaccines(): void {
    this.vaccineService.getOverdueVaccines(this.childId).subscribe(
      data => {
        this.overdueVaccines = data;
      },
      error => {
        console.error('Error fetching overdue vaccines:', error);
      }
    );
  }
}
