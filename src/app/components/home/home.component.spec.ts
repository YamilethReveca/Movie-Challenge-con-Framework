import { ComponentFixture,TestBed, tick  } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ParamMap, convertToParamMap } from '@angular/router';
import { throwError } from 'rxjs';

import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component'
import { PaginacionComponent } from '../paginacion/paginacion.component';
import { ContenedorFiltroOrdenamientoComponent } from '../contenedor-filtro-ordenamiento/contenedor-filtro-ordenamiento.component';
import { CardsComponent } from '../cards/cards.component';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let apiService: jasmine.SpyObj<ApiService>;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(() => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getData']);

    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        ContenedorFiltroOrdenamientoComponent,
        CardsComponent,
        PaginacionComponent
      ],
      imports: [RouterTestingModule],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
      ],
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  fit('should set selectedGenre if it exists in query params', () => {
    const paramMap = convertToParamMap({ genre: 'Action' });
    spyOnProperty(activatedRoute, 'queryParams').and.returnValue(of(paramMap));
    
    component.ngOnInit();

    expect(component.selectedGenre).toEqual('Action');
  });

  it('should set selectedSorting if it exists in query params', () => {
    const paramMap = convertToParamMap({ sortby: 'popularity' });
    spyOnProperty(activatedRoute.snapshot, 'queryParamMap').and.returnValue(paramMap);

    component.ngOnInit();

    expect(component.selectedSorting).toEqual('popularity');
  });

  it('should set queryParams.genre if selectedGenre is not an empty string', () => {
    component.selectedGenre = 'Drama';
    const queryParams: any = {};

    component.onGenreChange('Action');

    expect(queryParams.genre).toEqual('Drama');
  });

  it('should set queryParams.sortby if selectedSorting is not an empty string', () => {
    component.selectedSorting = 'popularity';
    const queryParams: any = {};

    component.onSortingChange('release_date');

    expect(queryParams.sortby).toEqual('popularity');
  });

  it('should not set queryParams.sortby if selectedSorting is an empty string', () => {
    component.selectedSorting = '';
    const queryParams: any = {};

    component.onSortingChange('release_date');

    expect(queryParams.sortby).toBeUndefined();
  });

  it('should not set queryParams.genre if selectedGenre is an empty string', () => {
    component.selectedGenre = '';
    const queryParams: any = {};

    component.onGenreChange('Action');

    expect(queryParams.genre).toBeUndefined();
  });

  it('should not call apiService.getData if page exceeds maxPagesToShow or paginasTotales', () => {
    spyOn(apiService, 'getData');

    component.getData(10);

    expect(apiService.getData).not.toHaveBeenCalled();
  });

  it('should log error message on error callback', () => {
    spyOn(console, 'error');

    spyOn(apiService, 'getData').and.returnValue(throwError(() => new Error('test')));
    component.getData(1);

    fixture.detectChanges();
    tick();

    
    expect(console.error).toHaveBeenCalledWith('Error al obtener datos:', 'test');
  });
});