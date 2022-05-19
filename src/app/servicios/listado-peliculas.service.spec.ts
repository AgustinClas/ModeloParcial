import { TestBed } from '@angular/core/testing';

import { ListadoPeliculasService } from './listado-peliculas.service';

describe('ListadoPeliculasService', () => {
  let service: ListadoPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
