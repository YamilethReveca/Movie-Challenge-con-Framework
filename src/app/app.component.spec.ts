import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PaginacionComponent } from './components/paginacion/paginacion.component';
import { ContenedorFiltroOrdenamientoComponent } from './components/contenedor-filtro-ordenamiento/contenedor-filtro-ordenamiento.component';
import { CardsComponent } from './components/cards/cards.component';



describe('AppRoutingModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppRoutingModule],
    });
  });

  it('should create the app routing module', () => {
    const appRoutingModule = TestBed.inject(AppRoutingModule);
    expect(appRoutingModule).toBeTruthy();
  });

}),


describe('AppModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        PaginacionComponent,
        ContenedorFiltroOrdenamientoComponent,
        CardsComponent,
      ],
      imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    });
  });

  it('should create the app component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponent = fixture.componentInstance;
    expect(appComponent).toBeTruthy();
  });
});
