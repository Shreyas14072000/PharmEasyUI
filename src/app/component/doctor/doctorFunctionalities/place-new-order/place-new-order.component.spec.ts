import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceNewOrderComponent } from './place-new-order.component';

describe('PlaceNewOrderComponent', () => {
  let component: PlaceNewOrderComponent;
  let fixture: ComponentFixture<PlaceNewOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceNewOrderComponent]
    });
    fixture = TestBed.createComponent(PlaceNewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
