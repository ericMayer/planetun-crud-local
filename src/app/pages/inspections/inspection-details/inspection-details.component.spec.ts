import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionDetailsComponent } from './inspection-details.component';

describe('InspectionDetailsComponent', () => {
  let component: InspectionDetailsComponent;
  let fixture: ComponentFixture<InspectionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspectionDetailsComponent]
    });
    fixture = TestBed.createComponent(InspectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
