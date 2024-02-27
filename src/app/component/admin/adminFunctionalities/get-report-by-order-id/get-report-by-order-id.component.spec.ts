import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReportByOrderIDComponent } from './get-report-by-order-id.component';

describe('GetReportByOrderIDComponent', () => {
  let component: GetReportByOrderIDComponent;
  let fixture: ComponentFixture<GetReportByOrderIDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetReportByOrderIDComponent]
    });
    fixture = TestBed.createComponent(GetReportByOrderIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
