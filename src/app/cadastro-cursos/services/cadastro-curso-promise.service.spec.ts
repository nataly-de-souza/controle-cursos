import { TestBed } from '@angular/core/testing';

import { CadastroCursoPromiseService } from './cadastro-curso-promise.service';

describe('CadastroCursoPromiseService', () => {
  let service: CadastroCursoPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroCursoPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
