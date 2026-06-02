import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingDetail } from './housing-detail';

describe('HousingDetail', () => {
  let component: HousingDetail;
  let fixture: ComponentFixture<HousingDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(HousingDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
