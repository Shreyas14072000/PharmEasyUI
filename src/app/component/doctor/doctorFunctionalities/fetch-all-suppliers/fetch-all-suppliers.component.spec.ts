import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchAllSuppliersComponent } from './fetch-all-suppliers.component';

describe('FetchAllSuppliersComponent', () => {
  let component: FetchAllSuppliersComponent;
  let fixture: ComponentFixture<FetchAllSuppliersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchAllSuppliersComponent]
    });
    fixture = TestBed.createComponent(FetchAllSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
