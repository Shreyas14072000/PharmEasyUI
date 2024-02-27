import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrderByIdComponent } from './search-order-by-id.component';

describe('SearchOrderByIdComponent', () => {
  let component: SearchOrderByIdComponent;
  let fixture: ComponentFixture<SearchOrderByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchOrderByIdComponent]
    });
    fixture = TestBed.createComponent(SearchOrderByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
