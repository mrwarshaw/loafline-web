import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadAcceptance } from './bread-acceptance';

describe('BreadAcceptance', () => {
  let component: BreadAcceptance;
  let fixture: ComponentFixture<BreadAcceptance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadAcceptance],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadAcceptance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
