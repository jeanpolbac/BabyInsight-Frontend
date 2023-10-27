import { Component, OnInit } from '@angular/core';
import { ChildService } from '../child.service';
import { RequestChild } from '../models/request.child.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-children',
  templateUrl: './list-children.component.html',
  styleUrls: ['./list-children.component.css']
})
/**
 * Component for listing children and navigating to child details and vaccine pages.
 */
export class ListChildrenComponent implements OnInit {

  children: RequestChild[] = [];
  dropdownStates: boolean[] = []; // Define an array to keep track of dropdown states

  constructor(private childService: ChildService, private router: Router) { }

  /**
   * Toggles the dropdown for a specific child.
   * @param index - The index of the child to toggle.
   */
  toggleDropdown(index: number) {
    this.dropdownStates[index] = !this.dropdownStates[index];
  }

  /**
   * Fetches the list of children when the component initializes.
   */
  ngOnInit(): void {
    this.childService.getChildren().subscribe(
      data => this.children = data
    );
  }

  /**
   * Navigates to the view child page.
   * @param id - The ID of the child to view.
   */
  viewChild(id: number): void {
    this.router.navigate(['/view-child', id]);
  }

  /**
   * Navigates to the overdue vaccines page.
   * @param childId - The ID of the child for whom to view overdue vaccines.
   */
  viewOverdueVaccines(childId: number) {
    this.router.navigate(['/list-overdue', childId]);
  }

  /**
   * Navigates to the remaining vaccines page.
   * @param childId - The ID of the child for whom to view remaining vaccines.
   */
  viewRemainingVaccines(childId: number): void {
    this.router.navigate([`/list-remaining/${childId}`]);
  }

  /**
   * Navigates to the administered vaccines page.
   * @param childId - The ID of the child for whom to view administered vaccines.
   */
  viewAdministeredVaccines(childId: number): void {
    this.router.navigate([`/list-administered/${childId}`]);
  }

  /**
   * Calculates the age of a child based on their date of birth.
   * @param dateOfBirth - The date of birth of the child.
   * @returns The age of the child in years.
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
