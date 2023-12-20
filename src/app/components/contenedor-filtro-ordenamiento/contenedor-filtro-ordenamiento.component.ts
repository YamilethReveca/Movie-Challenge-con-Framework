import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-contenedor-filtro-ordenamiento',
  templateUrl: './contenedor-filtro-ordenamiento.component.html',
  styleUrls: ['./contenedor-filtro-ordenamiento.component.scss']
})
export class ContenedorFiltroOrdenamientoComponent {
  @Output() filter = new EventEmitter<string>();
  @Output() sort = new EventEmitter<string>();

  constructor(private apiService: ApiService, private homeComponent: HomeComponent) { }


  // cambio de genero
  onGenreChange(event: any) {
    console.log(event.target.value)
    this.filter.emit(event.target.value);

  }
// cambio del ordenamiento
  onSortingChange(event: any) {

    console.log(event.target.value)
    this.sort.emit(event.target.value);
  }
}