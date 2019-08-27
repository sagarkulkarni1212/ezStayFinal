import { TestBed } from '@angular/core/testing';

import { EzstaybookingsService } from './ezstaybookings.service';

describe('EzstaybookingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EzstaybookingsService = TestBed.get(EzstaybookingsService);
    expect(service).toBeTruthy();
  });
});
