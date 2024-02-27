import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDrugByDrugNameComponent } from './search-drug-by-drug-name.component';

describe('SearchDrugByDrugNameComponent', () => {
  let component: SearchDrugByDrugNameComponent;
  let fixture: ComponentFixture<SearchDrugByDrugNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDrugByDrugNameComponent]
    });
    fixture = TestBed.createComponent(SearchDrugByDrugNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
