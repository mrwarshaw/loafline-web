import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceAdminHome } from './instance-admin-home';

describe('InstanceAdminHome', () => {
  let component: InstanceAdminHome;
  let fixture: ComponentFixture<InstanceAdminHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstanceAdminHome],
    }).compileComponents();

    fixture = TestBed.createComponent(InstanceAdminHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
