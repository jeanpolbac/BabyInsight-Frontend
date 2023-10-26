import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineListComponent } from './vaccine-list.component';

describe('VaccineListComponent', () => {
  let component: VaccineListComponent;
  let fixture: ComponentFixture<VaccineListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaccineListComponent]
    });
    fixture = TestBed.createComponent(VaccineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
