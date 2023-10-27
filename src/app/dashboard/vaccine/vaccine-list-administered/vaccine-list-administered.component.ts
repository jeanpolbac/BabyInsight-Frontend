import { Component, OnInit } from '@angular/core';
import { Vaccine } from "../vaccine.model";
import { VaccineService } from "../vaccine.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-vaccine-list-administered',
  templateUrl: './vaccine-list-administered.component.html',
  styleUrls: ['./vaccine-list-administered.component.css']
})
/**
 * Component for displaying administered vaccines for a child.
 */
export class VaccineListAdministeredComponent implements OnInit {
  public administeredVaccines: Vaccine[] = [];
  public childId!: number;

  /**
   * Constructor for the VaccineListAdministeredComponent.
   * @param vaccineService - Service for fetching vaccine data.
   * @param route - ActivatedRoute for accessing route parameters.
   */
  constructor(private vaccineService: VaccineService, private route: ActivatedRoute) {}

  /**
   * Initializes the component by fetching the child ID from route parameters
   * and fetching the administered vaccines for the child.
   */
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.childId = +params['id'];
      this.fetchAdministeredVaccines();
    });
  }

  /**
   * Fetches the administered vaccines for the child with the given ID.
   */
  fetchAdministeredVaccines(): void {
    this.vaccineService.getAdministeredVaccines(this.childId).subscribe(
      data => {
        this.administeredVaccines = data;
      },
      error => {
        console.error('Error fetching administered vaccines:', error);
      }
    );
  }
}
