import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteNoResponsiveComponent } from './site-no-responsive.component';

describe('SiteNoResponsiveComponent', () => {
  let component: SiteNoResponsiveComponent;
  let fixture: ComponentFixture<SiteNoResponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteNoResponsiveComponent]
    });
    fixture = TestBed.createComponent(SiteNoResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
