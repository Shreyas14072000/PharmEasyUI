import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrderByDoctorIdComponent } from './search-order-by-doctor-id.component';

describe('SearchOrderByDoctorIdComponent', () => {
  let component: SearchOrderByDoctorIdComponent;
  let fixture: ComponentFixture<SearchOrderByDoctorIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchOrderByDoctorIdComponent]
    });
    fixture = TestBed.createComponent(SearchOrderByDoctorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
