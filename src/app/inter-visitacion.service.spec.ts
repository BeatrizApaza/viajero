import { TestBed, inject } from '@angular/core/testing';

import { InterVisitacionService } from './inter-visitacion.service';

describe('InterVisitacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterVisitacionService]
    });
  });

  it('should be created', inject([InterVisitacionService], (service: InterVisitacionService) => {
    expect(service).toBeTruthy();
  }));
});
