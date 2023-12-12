import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';


interface ApiResponse {
  results: Item[];
  total_pages: number;
}

interface Item {
  poster_path: string;
  release_date: Date;
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imagenes = 'http://image.tmdb.org/t/p/w500';

  data: Item[] = [];
  currentPage = 1;
  totalPages = 1;


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getData(this.currentPage);
  }

  changePage(newPage: number) {
    console.log('Changing page to:', newPage);
    this.currentPage = newPage;
    this.getData(this.currentPage);
  }


  getData(page: number) {
    if (page > this.totalPages) {
      return;
    }
    this.apiService.getData(page).subscribe(
      (response: ApiResponse) => {
        this.data = response.results.map(item => ({
          ...item,
          release_date: new Date(item.release_date),
        }));
        // Actualiza this.totalPages solo si el valor proporcionado es mayor al actual
        this.totalPages = Math.max(this.totalPages, response.total_pages);
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );

  }

  
}



