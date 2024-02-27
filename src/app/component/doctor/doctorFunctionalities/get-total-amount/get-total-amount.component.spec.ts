import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTotalAmountComponent } from './get-total-amount.component';

describe('GetTotalAmountComponent', () => {
  let component: GetTotalAmountComponent;
  let fixture: ComponentFixture<GetTotalAmountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetTotalAmountComponent]
    });
    fixture = TestBed.createComponent(GetTotalAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
