import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalesReportComponent } from './create-sales-report.component';

describe('CreateSalesReportComponent', () => {
  let component: CreateSalesReportComponent;
  let fixture: ComponentFixture<CreateSalesReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSalesReportComponent]
    });
    fixture = TestBed.createComponent(CreateSalesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
