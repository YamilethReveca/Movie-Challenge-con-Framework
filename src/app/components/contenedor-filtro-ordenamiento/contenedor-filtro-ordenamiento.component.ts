import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contenedor-filtro-ordenamiento',
  templateUrl: './contenedor-filtro-ordenamiento.component.html',
  styleUrls: ['./contenedor-filtro-ordenamiento.component.scss']
})
export class ContenedorFiltroOrdenamientoComponent {
  @Output() filter = new EventEmitter<string>();
  @Output() sort = new EventEmitter<string>();

  constructor() { }


  // cambio de genero
  onGenreChange(event: any) {
    
    this.filter.emit(event.target.value);

  }
// cambio del ordenamiento
  onSortingChange(event: any) {

    
    this.sort.emit(event.target.value);
  }
}