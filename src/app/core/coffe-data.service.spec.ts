import { TestBed } from '@angular/core/testing';

import { CoffeDataService } from './coffe-data.service';

describe('CoffeDataService', () => {
  let service: CoffeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
