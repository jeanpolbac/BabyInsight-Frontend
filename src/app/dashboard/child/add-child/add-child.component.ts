import { Component } from '@angular/core';
import { ChildService } from 'src/app/dashboard/child/child.service';
import { Child} from "../models/child.model";

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.css']
})
export class AddChildComponent {
  child: Child = {name: '', dateOfBirth: ''};

  constructor(private childService: ChildService) {
  }

  onSubmit() {
    this.childService.addChild(this.child).subscribe(
      (response) => {
        console.log('Child added successfully', response);
      },
      (error) => {
        console.error('Failed to add child', error);
      }
    );
  }
}





