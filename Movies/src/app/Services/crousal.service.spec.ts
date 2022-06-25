import { TestBed } from '@angular/core/testing';

import { CrousalService } from './crousal.service';

describe('CrousalService', () => {
  let service: CrousalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrousalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
