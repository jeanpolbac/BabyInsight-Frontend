import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { VaccineService} from "../vaccine.service";
import { Vaccine } from '../vaccine.model';

@Component({
  selector: 'app-vaccine-list-overdue',
  templateUrl: './vaccine-list-overdue.component.html',
  styleUrls: ['./vaccine-list-overdue.component.css']
})
export class VaccineListOverdueComponent implements OnInit{
  overdueVaccines: Vaccine[] = [];
  childId!: number;

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
        this.overdueVaccines = data;
      },
      error => {
        console.error('Error fetching overdue vaccines:', error);
      }
    );
  }
}
