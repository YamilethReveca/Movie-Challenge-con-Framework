import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
//import { PeliculasDetallesComponent } from './components/peliculas-detalles/peliculas-detalles.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/section/section.component';
// import { PaginacionComponent } from './components/paginacion/paginacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    FooterComponent,
   // PeliculasDetallesComponent,
    HeaderComponent,
    SectionComponent,
   // PaginacionComponent
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
