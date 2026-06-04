import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadPreferences } from './bread-preferences';

describe('BreadPreferences', () => {
  let component: BreadPreferences;
  let fixture: ComponentFixture<BreadPreferences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadPreferences],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadPreferences);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
