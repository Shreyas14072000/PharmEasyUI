import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveOrderComponent } from './remove-order.component';

describe('RemoveOrderComponent', () => {
  let component: RemoveOrderComponent;
  let fixture: ComponentFixture<RemoveOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveOrderComponent]
    });
    fixture = TestBed.createComponent(RemoveOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
