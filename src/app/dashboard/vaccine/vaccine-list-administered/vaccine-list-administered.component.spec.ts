import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineListAdministeredComponent } from './vaccine-list-administered.component';

describe('VaccineListAdministeredComponent', () => {
  let component: VaccineListAdministeredComponent;
  let fixture: ComponentFixture<VaccineListAdministeredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaccineListAdministeredComponent]
    });
    fixture = TestBed.createComponent(VaccineListAdministeredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
