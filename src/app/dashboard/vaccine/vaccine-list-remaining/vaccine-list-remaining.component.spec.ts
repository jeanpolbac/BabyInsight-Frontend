import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineListRemainingComponent } from './vaccine-list-remaining.component';

describe('VaccineListRemainingComponent', () => {
  let component: VaccineListRemainingComponent;
  let fixture: ComponentFixture<VaccineListRemainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaccineListRemainingComponent]
    });
    fixture = TestBed.createComponent(VaccineListRemainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
