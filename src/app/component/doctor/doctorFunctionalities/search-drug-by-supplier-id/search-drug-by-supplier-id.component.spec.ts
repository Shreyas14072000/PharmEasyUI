import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDrugBySupplierIdComponent } from './search-drug-by-supplier-id.component';

describe('SearchDrugBySupplierIdComponent', () => {
  let component: SearchDrugBySupplierIdComponent;
  let fixture: ComponentFixture<SearchDrugBySupplierIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDrugBySupplierIdComponent]
    });
    fixture = TestBed.createComponent(SearchDrugBySupplierIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
