import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { VaccineService } from "../vaccine.service";
import { Vaccine } from "../vaccine.model";

@Component({
  selector: 'app-vaccine-list-remaining',
  templateUrl: './vaccine-list-remaining.component.html',
  styleUrls: ['./vaccine-list-remaining.component.css']
})

/**
 * Component for displaying the remaining vaccines for a child.
 */
export class VaccineListRemainingComponent implements OnInit {
  public childId!: number;
  public remainingVaccines: Vaccine[] = [];

  /**
   * Constructor for the VaccineListRemainingComponent.
   * @param route - ActivatedRoute for accessing route parameters.
   * @param vaccineService - Service for fetching vaccine data.
   */
  constructor(private route: ActivatedRoute, private vaccineService: VaccineService) {}

  /**
   * Initializes the component by fetching the child ID from route parameters
   * and fetching the remaining vaccines for the child.
   */
  ngOnInit() {
    this.childId = this.route.snapshot.params['id'];
    this.fetchRemainingVaccines();
  }

  /**
   * Fetches the remaining vaccines for the child with the given ID.
   */
  fetchRemainingVaccines(): void {
    this.vaccineService.getRemainingVaccines(this.childId).subscribe(
      (data: Vaccine[]) => {
        this.remainingVaccines = data;
      },
      (error) => {
        console.error('Error fetching remaining vaccines:', error);
      }
    );
  }
}
