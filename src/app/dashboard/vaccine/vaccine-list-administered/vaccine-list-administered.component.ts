import { Component, OnInit } from '@angular/core';
import { Vaccine } from "../vaccine.model";
import { VaccineService } from "../vaccine.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-vaccine-list-administered',
  templateUrl: './vaccine-list-administered.component.html',
  styleUrls: ['./vaccine-list-administered.component.css']
})
export class VaccineListAdministeredComponent implements OnInit {
  public administeredVaccines: Vaccine[] = [];
  public childId!: number;


  constructor(private vaccineService: VaccineService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.childId = +params['id'];
      this.fetchOverdueVaccines();
    });
  }

  fetchOverdueVaccines(): void {
    this.vaccineService.getOverdueVaccines(this.childId).subscribe(
      data => {
        this.administeredVaccines = data;
      },
      error => {
        console.error('Error fetching overdue vaccines:', error);
      }
    );
  }
}
