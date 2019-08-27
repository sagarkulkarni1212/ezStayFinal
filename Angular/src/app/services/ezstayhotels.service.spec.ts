import { TestBed } from '@angular/core/testing';

import { EzstayhotelsService } from './ezstayhotels.service';

describe('EzstayhotelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EzstayhotelsService = TestBed.get(EzstayhotelsService);
    expect(service).toBeTruthy();
  });
});
