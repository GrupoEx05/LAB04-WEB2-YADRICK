import { TestBed } from '@angular/core/testing';

import { RickAndMortyService } from './capitulos.service';

describe('RickAndMortyService', () => {
  let service: RickAndMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickAndMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});