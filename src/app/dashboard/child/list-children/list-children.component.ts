import { Component, OnInit } from '@angular/core';
import { ChildService } from '../child.service';
import { RequestChild } from '../models/request.child.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-children',
  templateUrl: './list-children.component.html',
  styleUrls: ['./list-children.component.css']
})
export class ListChildrenComponent implements OnInit {

  children: RequestChild[] = [];

  constructor(private childService: ChildService, private router: Router) { }


  /**
   * Fetch children
   */
  ngOnInit(): void {
    this.childService.getChildren().subscribe(
      data => this.children = data
    );
  }

  /**
   * Navigate to view child page
   * @param id
   */
  viewChild(id: number): void {
    this.router.navigate(['/view-child', id]);
  }

  /**
   * Navigate to overdue vaccines page
   * @param childId
   */
  viewOverdueVaccines(childId: number) {
    this.router.navigate(['/list-overdue', childId]);
  }

  /**
   * Navigate to remaining vaccines page
   * @param childId
   */
  viewRemainingVaccines(childId: number): void {
    this.router.navigate([`/list-remaining/${childId}`]);
  }

  /**
   * Navigate to administered vaccines page
   * @param childId
   */
  viewAdministeredVaccines(childId: number): void {
    this.router.navigate([`/list-administered/${childId}`]);
  }

  /**
   * Calculate age of child
   * @param dateOfBirth
   */
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
