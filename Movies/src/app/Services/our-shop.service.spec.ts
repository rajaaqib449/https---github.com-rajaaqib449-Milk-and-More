import { TestBed } from '@angular/core/testing';

import { OurShopService } from './our-shop.service';

describe('OurShopService', () => {
  let service: OurShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
