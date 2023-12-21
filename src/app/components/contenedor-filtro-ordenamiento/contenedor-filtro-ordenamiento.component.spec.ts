import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorFiltroOrdenamientoComponent } from './contenedor-filtro-ordenamiento.component';

describe('ContenedorFiltroOrdenamientoComponent', () => {
  let component: ContenedorFiltroOrdenamientoComponent;
  let fixture: ComponentFixture<ContenedorFiltroOrdenamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenedorFiltroOrdenamientoComponent],
    });

    fixture = TestBed.createComponent(ContenedorFiltroOrdenamientoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filter event on onGenreChange', () => {
    const spy = spyOn(component.filter, 'emit');
    const event = { target: { value: 'SomeGenre' } };
    component.onGenreChange(event);
    expect(spy).toHaveBeenCalledWith('SomeGenre');
  });

  it('should emit sort event on onSortingChange', () => {
    const spy = spyOn(component.sort, 'emit');
    const event = { target: { value: 'SomeSorting' } };
    component.onSortingChange(event);
    expect(spy).toHaveBeenCalledWith('SomeSorting');
  });

});