import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineListOverdueComponent } from './vaccine-list-overdue.component';

describe('VaccineListOverdueComponent', () => {
  let component: VaccineListOverdueComponent;
  let fixture: ComponentFixture<VaccineListOverdueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaccineListOverdueComponent]
    });
    fixture = TestBed.createComponent(VaccineListOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
