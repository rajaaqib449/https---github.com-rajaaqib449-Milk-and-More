import { TestBed } from '@angular/core/testing';

import { FreshMilkService } from './fresh-milk.service';

describe('FreshMilkService', () => {
  let service: FreshMilkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreshMilkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
