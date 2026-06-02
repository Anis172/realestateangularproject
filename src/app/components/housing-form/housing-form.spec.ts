import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingForm } from './housing-form';

describe('HousingForm', () => {
  let component: HousingForm;
  let fixture: ComponentFixture<HousingForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingForm],
    }).compileComponents();

    fixture = TestBed.createComponent(HousingForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
