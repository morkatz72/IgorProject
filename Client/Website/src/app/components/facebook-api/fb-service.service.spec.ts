import { TestBed, inject } from '@angular/core/testing';

import { FbServiceService } from './fb-service.service';

describe('FbServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FbServiceService]
    });
  });

  it('should be created', inject([FbServiceService], (service: FbServiceService) => {
    expect(service).toBeTruthy();
  }));
});
