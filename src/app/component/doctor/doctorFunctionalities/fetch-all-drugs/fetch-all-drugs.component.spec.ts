import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchAllDrugsComponent } from './fetch-all-drugs.component';

describe('FetchAllDrugsComponent', () => {
  let component: FetchAllDrugsComponent;
  let fixture: ComponentFixture<FetchAllDrugsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchAllDrugsComponent]
    });
    fixture = TestBed.createComponent(FetchAllDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
