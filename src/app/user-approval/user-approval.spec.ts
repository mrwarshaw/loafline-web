import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApproval } from './user-approval';

describe('UserApproval', () => {
  let component: UserApproval;
  let fixture: ComponentFixture<UserApproval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserApproval],
    }).compileComponents();

    fixture = TestBed.createComponent(UserApproval);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
