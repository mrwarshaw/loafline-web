import { TestBed } from '@angular/core/testing';

import { LoafService } from './loaf.service';

describe('LoafService', () => {
  let service: LoafService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoafService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
