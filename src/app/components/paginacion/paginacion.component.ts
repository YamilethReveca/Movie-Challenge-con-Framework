import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.scss']
})
export class PaginacionComponent  {


  @Input() currentPage: number = 1;
  @Input() totalPages: number = 5;
  @Output() pageChange = new EventEmitter<number>();

 

  previous() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  next() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  changePage(newPage: number) {
    this.pageChange.emit(newPage);
  }
}



