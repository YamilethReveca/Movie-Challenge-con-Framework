import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ParamMap, convertToParamMap } from '@angular/router';
import { throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component'
import { PaginacionComponent } from '../paginacion/paginacion.component';
import { ContenedorFiltroOrdenamientoComponent } from '../contenedor-filtro-ordenamiento/contenedor-filtro-ordenamiento.component';
import { CardsComponent } from '../cards/cards.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  // let activatedRoute: ActivatedRoute;
  const mockActivatedRoute = {
    queryParams: of({ abc: 'testABC' })
  };
  let router: Router;

  beforeEach(() => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['getData']);

    TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderComponent, ContenedorFiltroOrdenamientoComponent, CardsComponent, PaginacionComponent, FooterComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ApiService, useValue: apiServiceSpy }
      ]
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

  });

  it('Debería crear', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia llamar al ngOnInit', () => {
    apiServiceSpy.getData.and.returnValue(of({ results: [], total_paginas: 5 }));
    //component.selectedGenre
    component.ngOnInit();
    expect(apiServiceSpy.getData).toHaveBeenCalledWith(1, undefined, undefined);

  });

  it('debería llamar a apiService.getData cuando se llama a getData', () => {
    apiServiceSpy.getData.and.returnValue(of({ results: [], total_paginas: 5 }));
    component.getData(1);
    expect(apiServiceSpy.getData).toHaveBeenCalledWith(1, '', '');
  });

  it('debería actualizar los datos cuando apiService.getData devuelva datos', () => {
    const fakeApiResponse = {
      results: [{
        id: 123,
        poster_path: 'path',
        release_date: 'date: yyyy-mm-dd',
        title: 'Title',
        popularity: 123,
        vote_average: 7.5
      }],
      total_paginas: 5
    };

    // Espía el método getData y devuelve los datos simulados
    apiServiceSpy.getData.and.returnValue(of(fakeApiResponse));

    // Llama al método getData del componente
    component.getData(1);

    // Verifica que la propiedad data se actualice correctamente
    expect(component.data).toEqual([{
      id: 123,
      poster_path: 'path',
      release_date: 'date: yyyy-mm-dd',
      title: 'Title',
      popularity: 123,
      vote_average: 7.5
    }]);
  });

  it('debera llamar a cambioPagina con selectedGenre y selectedSorting vacios', () => {
    apiServiceSpy.getData.and.returnValue(of({ results: [], total_paginas: 5 }));
    const spy = spyOn(router, 'navigate');
    const queryParams = { page: 3 };
    component.cambioPagina(3);
    expect(component.paginaActual).toBe(3);
    expect(spy).toHaveBeenCalledWith(['/'], { queryParams });

  })

  it('debera llamar a cambioPagina con selectedGenre y selectedSorting distinto a vacios', () => {
    apiServiceSpy.getData.and.returnValue(of({ results: [], total_paginas: 5 }));
    const spy = spyOn(router, 'navigate');
    component.selectedGenre = "20";
    component.selectedSorting = "popularity.desc";
    const queryParams = { page: 3, genre: "20", sortby: "popularity.desc" };
    component.cambioPagina(3);
    expect(component.paginaActual).toBe(3);
    expect(spy).toHaveBeenCalledWith(['/'], { queryParams });
  })

  it('debera llamar a onGenreChange con selectedGenre y selectedSorting vacios', () => {
    apiServiceSpy.getData.and.returnValue(of({ results: [], total_paginas: 5 }));
    const spy = spyOn(router, 'navigate');
    const queryParams = { page: 2 };
    component.paginaActual = 2;
    component.onGenreChange('');
    expect(component.selectedGenre).toBe('');
    expect(spy).toHaveBeenCalledWith(['/'], { queryParams });
  })



  it('debera llamar a onGenreChange con selectedGenre y selectedSorting cuando no sea un string vacio', () => {
    apiServiceSpy.getData.and.returnValue(of({ results: [], total_paginas: 5 }));
    const spy = spyOn(router, 'navigate');
    const queryParams = { page: 2, genre: '20', sortby: 'popularity.asc' };
    component.paginaActual = 2;
    component.selectedSorting = 'popularity.asc';
    component.onGenreChange('20');
    expect(component.selectedGenre).toBe('20');
    expect(spy).toHaveBeenCalledWith(['/'], { queryParams });
  })


  it('debera llamar a onSortingChange con selectedGenre y selectedSorting vacios', () => {
    apiServiceSpy.getData.and.returnValue(of({ results: [], total_paginas: 5 }));
    const spy = spyOn(router, 'navigate');
    const queryParams = { page: 2 };
    component.paginaActual = 2;
    component.onSortingChange('');
    expect(component.selectedSorting).toBe('');
    expect(spy).toHaveBeenCalledWith(['/'], { queryParams });
  })



  it('debera llamar a onSortingChange con selectedGenre y selectedSorting cuando no sea un string vacio', () => {
    apiServiceSpy.getData.and.returnValue(of({ results: [], total_paginas: 5 }));
    const spy = spyOn(router, 'navigate');
    const queryParams = { page: 2, genre: '20', sortby: 'popularity.asc' };
    component.paginaActual = 2;
    component.selectedGenre = '20';
    component.onSortingChange('popularity.asc');
    expect(component.selectedSorting).toBe('popularity.asc');
    expect(spy).toHaveBeenCalledWith(['/'], { queryParams });
  })


  it('should handle error on load details', fakeAsync(() => {
    const errorMessage = 'Error al obtener datos';
    apiServiceSpy.getData.and.returnValue(throwError(() => new Error(errorMessage)));
    spyOn(console, 'error'); // Espía la función console.error
    component.getData(1);

    //fixture.detectChanges();
    tick();

    expect(console.error).toHaveBeenCalledWith('Error al obtener datos:', errorMessage);
    // Puedes agregar más expectativas según sea necesario para manejar el error en tu componente
  }));

  it('debe llamar a getData del component y retornar sin llamar al getData del service', fakeAsync(() => {
    apiServiceSpy.getData.and.returnValue(of({ results: [{ id: 'id', poster_path: 'poster_path' }], total_paginas: 5 }));
    component.paginasTotales = 5;
    component.getData(6);
    tick();
    expect(component.data).toEqual([]);


  }));

  it(' debe asignar selectedGenre y selectedSorting cuando llame a ngOnInit', () => {
    apiServiceSpy.getData.and.returnValue(of({ results: [], total_paginas: 5 }));
    TestBed.inject(ActivatedRoute).queryParams = of({ genre: '20', sortby: 'popularity.desc' });

    component.ngOnInit();

    expect(component.selectedGenre).toBe('20');
    expect(component.selectedSorting).toBe('popularity.desc');

  });

});

