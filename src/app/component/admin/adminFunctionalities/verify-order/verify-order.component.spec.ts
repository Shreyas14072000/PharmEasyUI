import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyOrderComponent } from './verify-order.component';

describe('VerifyOrderComponent', () => {
  let component: VerifyOrderComponent;
  let fixture: ComponentFixture<VerifyOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyOrderComponent]
    });
    fixture = TestBed.createComponent(VerifyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
