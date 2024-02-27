import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDrugComponent } from './update-drug.component';

describe('UpdateDrugComponent', () => {
  let component: UpdateDrugComponent;
  let fixture: ComponentFixture<UpdateDrugComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDrugComponent]
    });
    fixture = TestBed.createComponent(UpdateDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
