import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contenedor-filtro-ordenamiento',
  templateUrl: './contenedor-filtro-ordenamiento.component.html',
  styleUrls: ['./contenedor-filtro-ordenamiento.component.scss']
})
export class ContenedorFiltroOrdenamientoComponent {

  @Input() selectedGenre: string = '';
  @Input() selectedSorting: string = '';

  //propiedadees de salida

  @Output() filter: EventEmitter<string> = new EventEmitter<string>();
  @Output() sort: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

    this.filter = new EventEmitter<string>();
    this.sort = new EventEmitter<string>();
  }
  // cambio de genero
  onGenreChange(event: any) {
    this.filter.emit(event.target.value);
  }
  // cambio del ordenamiento
  onSortingChange(event: any) {
    this.sort.emit(event.target.value);
  }

}