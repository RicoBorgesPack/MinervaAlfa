import { TestBed } from '@angular/core/testing';

import { TeatcherService } from './teatcher.service';

describe('TeatcherService', () => {
  let service: TeatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
