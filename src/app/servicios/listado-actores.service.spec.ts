import { TestBed } from '@angular/core/testing';

import { ListadoActoresService } from './listado-actores.service';

describe('ListadoActoresService', () => {
  let service: ListadoActoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoActoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
