import { TestBed, inject } from '@angular/core/testing';

import { SitesHotspotService } from './sites-hotspot.service';

describe('SitesHotspotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SitesHotspotService]
    });
  });

  it('should be created', inject([SitesHotspotService], (service: SitesHotspotService) => {
    expect(service).toBeTruthy();
  }));
});
