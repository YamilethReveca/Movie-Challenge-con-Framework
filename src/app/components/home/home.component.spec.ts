import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ApiService } from 'src/app/service/api.service';
import { of, throwError } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { CardsComponent } from '../cards/cards.component';
import { ContenedorFiltroOrdenamientoComponent } from '../contenedor-filtro-ordenamiento/contenedor-filtro-ordenamiento.component';
import { PaginacionComponent } from '../paginacion/paginacion.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService> = jasmine.createSpyObj('ApiService', ['getData']);

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderComponent, ContenedorFiltroOrdenamientoComponent, CardsComponent, PaginacionComponent, FooterComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('Deberia crear', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a apiService.getData cuando se llama a getData', () => {
    apiServiceSpy.getData.and.returnValue(of({ results: [], total_paginas: 5 }));
    component.getData(1);
    expect(apiServiceSpy.getData).toHaveBeenCalledWith(1);
  });

  it('debería actualizar los datos cuando apiService.getData devuelva datos', () => {
    const fakeApiResponse = { results: [{ poster_path: 'path', release_date: new Date(), title: 'Title' }], total_paginas: 5 };
    apiServiceSpy.getData.and.returnValue(of(fakeApiResponse));
    component.getData(1);
    expect(component.data).toEqual([{
      poster_path: 'path',
      release_date: jasmine.any(Date),
      title: 'Title'
    }]);
  });

  it('debería registrar un error cuando apiService.getData devuelva un error', () => {
    const errorMessage = 'Test error';
    apiServiceSpy.getData.and.returnValue(throwError(errorMessage));

    // Spy on console.error to check if it's called with the expected error message
    spyOn(console, 'error');

    component.getData(1);

    expect(console.error).toHaveBeenCalledWith('Error al obtener datos:', errorMessage);
  });


});
