import { TestBed } from '@angular/core/testing';

import { LeSabineShopFormService } from './le-sabine-shop-form.service';

describe('LeSabineShopFormService', () => {
  let service: LeSabineShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeSabineShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
