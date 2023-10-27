import { Component, OnInit } from '@angular/core';
import {Vaccine} from "../vaccine.model";
import {VaccineService} from "../vaccine.service";

@Component({
  selector: 'app-vaccine-list-administered',
  templateUrl: './vaccine-list-administered.component.html',
  styleUrls: ['./vaccine-list-administered.component.css']
})
export class VaccineListAdministeredComponent implements OnInit {
  public administeredVaccines: Vaccine[] = [];
  public childId: number = 1;


  constructor(private vaccineService: VaccineService) {
  }

  ngOnInit(): void {
    this.fetchAdministeredVaccines();
  }

  fetchAdministeredVaccines(): void {
    this.vaccineService.getAdministeredVaccines(this.childId).subscribe(
      (vaccines: Vaccine[]) => {
        this.administeredVaccines = vaccines;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
