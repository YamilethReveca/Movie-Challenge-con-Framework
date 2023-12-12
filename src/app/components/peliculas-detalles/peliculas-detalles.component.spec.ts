import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasDetallesComponent } from './peliculas-detalles.component';

describe('PeliculasDetallesComponent', () => {
  let component: PeliculasDetallesComponent;
  let fixture: ComponentFixture<PeliculasDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
