import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { ChildService } from '../child.service';
import {RequestChild} from "../models/request.child.model";

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  child!: RequestChild;

  constructor(private route: ActivatedRoute, private childService: ChildService) { }

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString !== null) {
      const id = Number(idString);  // Convert string to number using Number() constructor
      this.childService.getChildById(id).subscribe(
        data => this.child = data
      );
    }
  }

  calculateAge(dateOfBirth: Date): number {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
