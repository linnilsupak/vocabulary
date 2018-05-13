import { TestBed, inject } from '@angular/core/testing';

import { MenuTemplateService } from './menu-template.service';

describe('MenuTemplateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuTemplateService]
    });
  });

  it('should be created', inject([MenuTemplateService], (service: MenuTemplateService) => {
    expect(service).toBeTruthy();
  }));
});
