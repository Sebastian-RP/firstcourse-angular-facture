import { TestBed } from '@angular/core/testing';

import { PersonajesRMService } from './personajes-rm.service';

describe('PersonajesRMService', () => {
  let service: PersonajesRMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonajesRMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
