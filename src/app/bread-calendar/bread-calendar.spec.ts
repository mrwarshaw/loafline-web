import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCalendar } from './bread-calendar';

describe('BreadCalendar', () => {
  let component: BreadCalendar;
  let fixture: ComponentFixture<BreadCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadCalendar],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadCalendar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
