import { TestBed, inject  } from '@angular/core/testing';

import { ApiService } from './api.service';

import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no haya solicitudes pendientes después de cada prueba
    httpTestingController.verify();
  });

  it('debería ser creado', () => {
    expect(service).toBeTruthy();
  });

  it('debería realizar una solicitud GET con los parámetros proporcionados', () => {
    const mockResponse = { results: [], total_paginas: 5 };
    const pagina = 1;
    const genre = 'Accion';
    const sort = 'Valoracion';

    // Realiza una solicitud simulada
    service.getData(pagina, genre, sort).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verifica que la solicitud GET se realizó con los parámetros correctos
    const req = httpTestingController.expectOne(request => {
      return (
        request.method === 'GET' &&
        request.url === ' https://api.themoviedb.org/3/discover/movie',
        request.params.get('page') === pagina.toString() &&
        request.params.get('with_genres') === genre &&
        request.params.get('sort_by') === sort
      );
    });

    // Simula la respuesta
    req.flush(mockResponse);
  });

  // Puedes agregar más casos de prueba según sea necesario
});