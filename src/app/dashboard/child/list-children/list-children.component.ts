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

  ngOnInit(): void {
    this.childService.getChildren().subscribe(
      data => this.children = data
    );
  }
  viewChild(id: number): void {
    this.router.navigate(['/view-child', id]);
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
