import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';


interface ApiResponse {
  results: Item[];
  total_paginas: number;
}

// item para obtener de la api el poster,la fecha y el titulo
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
  data: Item[] = [];
  paginaActual = 1;
  paginasTotales = 5;
  selectedGenre: string = '';
  selectedSorting: string = '';

  constructor(
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.getData(this.paginaActual);
  }
//paginacion
  cambioPagina(newPage: number) {
    console.log('Changing page to:', newPage);
    this.paginaActual = newPage;
    this.getData(this.paginaActual);
  }
//filtro
  onGenreChange(selectedGenre: string) {
    this.selectedGenre = selectedGenre;
    this.getData(this.paginaActual);
    
  }
//ordenamiento
  onSortingChange(selectedSorting: string) {
    this.selectedSorting = selectedSorting;
    this.getData(this.paginaActual);
    
  }

  getData(page: number) {
    const maxPagesToShow = 5;
    if (page > maxPagesToShow || page > this.paginasTotales) {
      return;
    }

    this.apiService.getData(page, this.selectedGenre, this.selectedSorting).subscribe({
      next: (response: ApiResponse) => {
        this.data = response.results.map((item) => ({
          ...item,
          release_date: new Date(item.release_date),
        }));
      },
      error: (error) => {
        console.error('Error al obtener datos:', error);
      },
    });
  }
}