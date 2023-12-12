import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorFiltroOrdenamientoComponent } from './contenedor-filtro-ordenamiento.component';

describe('ContenedorFiltroOrdenamientoComponent', () => {
  let component: ContenedorFiltroOrdenamientoComponent;
  let fixture: ComponentFixture<ContenedorFiltroOrdenamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorFiltroOrdenamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorFiltroOrdenamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
