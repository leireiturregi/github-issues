import { TestBed, inject } from '@angular/core/testing';

import { SearchIssuesService } from './search-issues.service';

describe('SearchIssuesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchIssuesService]
    });
  });

  it('should be created', inject([SearchIssuesService], (service: SearchIssuesService) => {
    expect(service).toBeTruthy();
  }));
});
