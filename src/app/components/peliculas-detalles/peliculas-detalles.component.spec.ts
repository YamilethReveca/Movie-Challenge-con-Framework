import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { PeliculasDetallesComponent } from './peliculas-detalles.component';
import { ApiService } from 'src/app/service/api.service';
import { throwError } from 'rxjs';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component'

describe('PeliculasDetallesComponent', () => {
  let component: PeliculasDetallesComponent;
  let fixture: ComponentFixture<PeliculasDetallesComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ApiService', ['getDetallesPelicula']);

    await TestBed.configureTestingModule({
      declarations: [PeliculasDetallesComponent, FooterComponent,
        HeaderComponent,],
      providers: [
        { provide: ApiService, useValue: spy },
        { provide: ActivatedRoute, useValue: { params: of({ id: 1 }) } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PeliculasDetallesComponent);
    component = fixture.componentInstance;
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load details on init', fakeAsync(() => {
    const detallesMock = { /* Mock de detalles de película */ };
    apiServiceSpy.getDetallesPelicula.and.returnValue(of(detallesMock));

    fixture.detectChanges();
    tick();

    expect(component.peliculaDetalles).toEqual(detallesMock);
  }));

  it('should handle error on load details', fakeAsync(() => {
    const errorMessage = 'Error al cargar detalles';
    apiServiceSpy.getDetallesPelicula.and.returnValue(throwError(errorMessage));

    spyOn(console, 'error'); // Espía la función console.error

    fixture.detectChanges();
    tick();

    expect(console.error).toHaveBeenCalledWith('Error al cargar detalles:', errorMessage);
    // Puedes agregar más expectativas según sea necesario para manejar el error en tu componente
  }));

  // Agrega más pruebas según sea necesario
});