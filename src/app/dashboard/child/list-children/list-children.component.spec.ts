import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChildrenComponent } from './list-children.component';

describe('ListChildrenComponent', () => {
  let component: ListChildrenComponent;
  let fixture: ComponentFixture<ListChildrenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListChildrenComponent]
    });
    fixture = TestBed.createComponent(ListChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
