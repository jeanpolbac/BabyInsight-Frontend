import { Component, OnInit } from '@angular/core';
import { VaccineService} from "../vaccine.service";
import { Vaccine } from '../vaccine.model';

@Component({
  selector: 'app-vaccine-list-overdue',
  templateUrl: './vaccine-list-overdue.component.html',
  styleUrls: ['./vaccine-list-overdue.component.css']
})
export class VaccineListOverdueComponent implements OnInit{
  overdueVaccines: Vaccine[] = [];
  childId: number = 1;

  constructor(private vaccineService: VaccineService) {
  }

  ngOnInit(): void {
    this.fetchOverdueVaccines();
  }


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
