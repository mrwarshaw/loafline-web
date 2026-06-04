import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadHistory } from './bread-history';

describe('BreadHistory', () => {
  let component: BreadHistory;
  let fixture: ComponentFixture<BreadHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadHistory],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
