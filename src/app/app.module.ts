import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PeliculasDetallesComponent } from './components/peliculas-detalles/peliculas-detalles.component';
import { HeaderComponent } from './components/header/header.component';
import { PaginacionComponent } from './components/paginacion/paginacion.component';
import { ContenedorFiltroOrdenamientoComponent } from './components/contenedor-filtro-ordenamiento/contenedor-filtro-ordenamiento.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,   
    HomeComponent,
    FooterComponent,
    PeliculasDetallesComponent,
    HeaderComponent,  
    PaginacionComponent,
    ContenedorFiltroOrdenamientoComponent,
    CardsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
