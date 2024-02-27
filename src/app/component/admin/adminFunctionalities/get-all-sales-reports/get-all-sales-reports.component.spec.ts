import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllSalesReportsComponent } from './get-all-sales-reports.component';

describe('GetAllSalesReportsComponent', () => {
  let component: GetAllSalesReportsComponent;
  let fixture: ComponentFixture<GetAllSalesReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllSalesReportsComponent]
    });
    fixture = TestBed.createComponent(GetAllSalesReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
