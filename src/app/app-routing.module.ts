import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { PeliculasDetallesComponent } from './components/peliculas-detalles/peliculas-detalles.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detalles/:id', component: PeliculasDetallesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
