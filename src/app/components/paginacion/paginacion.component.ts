import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'


@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.scss']
})
export class PaginacionComponent  {


  @Input() currentPage: number = 1;
  @Input() totalPages: number = 5;
  @Output() pageChange = new EventEmitter<number>();

 

  // pagina anterior , va a echar para atras 

  anterior() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }
  // siguiente pagina , va a echar 1 hacia adelante
  siguiente() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }
  //  cambio de pagina. pagina 1-5
  cambioPagina(newPage: number) {
    this.pageChange.emit(newPage);
  }



}



