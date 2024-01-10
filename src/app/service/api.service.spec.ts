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

  it('debería realizar una solicitud GET con los parámetros proporcionados', () => {
    const mockResponse = { results: [], total_paginas: 5 };
    const pagina = 1;
    const genre = 'Accion';
    const sort = 'Valoracion';

    // Realiza una solicitud simulada
    service.getData(pagina, genre, sort).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });


    const expectedUrl = 'https://api.themoviedb.org/3/discover/movie';
    // Verifica que la solicitud GET se realizó con los parámetros correctos
    const req = httpTestingController.expectOne(request => {
      return (
        request.method === 'GET' &&
        request.url === expectedUrl &&
        request.params.get('page') === pagina.toString() &&
        request.params.get('with_genres') === genre &&
        request.params.get('sort_by') === sort
      );
    });

    // Simula la respuesta
    req.flush(mockResponse);
  });

  describe('getDetallesPelicula', () => {
    it('should return details for a movie', () => {
      const id = 123;
      const mockResponse = { /* Mock de detalles de película */ };
  
      service.getDetallesPelicula(id).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });
  
      const expectedUrl = `https://api.themoviedb.org/3/movie/${id}`;
      
      // Verifica que la solicitud GET se realizó con la URL correcta
      const req = httpTestingController.expectOne(expectedUrl);
      expect(req.request.method).toBe('GET');

      // Simula la respuesta
      req.flush(mockResponse);
    });
  });
});