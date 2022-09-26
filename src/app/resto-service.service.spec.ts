import { TestBed } from '@angular/core/testing';

import { RestoServiceService } from './resto-service.service';

describe('RestoServiceService', () => {
  let service: RestoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
