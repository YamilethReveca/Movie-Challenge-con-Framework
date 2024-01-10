import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardsComponent } from './cards.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

class RouterStub {
  navigate(params: any) {}
}

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: Router, useClass: RouterStub }
      ]
    });

    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    // Configuramos algunos datos de prueba
    component.peliculas = [
      { id: 1, title: 'Pelicula 1' },
      { id: 2, title: 'Pelicula 2' },
    ];

    // fixture.detectChanges(); // Iniciamos la detección de cambios para renderizar los datos
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to "detalles" route on onDetallesClick', () => {
    spyOn(console, 'log');  // Espía la función console.log
    // Utiliza el servicio RouterTestingModule para verificar la navegación
    const spy = spyOn(router, 'navigate');

    const movieId = 123;  // Id de película de ejemplo
    component.onDetallesClick(movieId);

    expect(console.log).toHaveBeenCalledWith('Detalles pelicula por id:', movieId);
    expect(spy).toHaveBeenCalledWith(['detalles', movieId]);
  });

  // Agrega más pruebas según sea necesario
});