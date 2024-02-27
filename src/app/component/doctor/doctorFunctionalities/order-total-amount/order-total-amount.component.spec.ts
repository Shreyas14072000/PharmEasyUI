import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTotalAmountComponent } from './order-total-amount.component';

describe('OrderTotalAmountComponent', () => {
  let component: OrderTotalAmountComponent;
  let fixture: ComponentFixture<OrderTotalAmountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderTotalAmountComponent]
    });
    fixture = TestBed.createComponent(OrderTotalAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
