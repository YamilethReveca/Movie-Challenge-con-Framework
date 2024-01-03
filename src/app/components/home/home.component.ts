import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';// importar la api



// Define una interfaz ApiResponse para estructurar el formato de respuesta de la API.

interface ApiResponse {
  results: Item[];
  total_paginas: number;
}

// Define una interfaz Item para representar la estructura de un elemento obtenido de la API.

interface Item {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  popularity: number;
  vote_average: number;
}
// decorador, esto lo trae todos los componentes

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

//clase del componente y se implementa el  onInit
// clase que angular reconoce como componente, como implementa onInit entonces debe crear una funcion ngOnInit
export class HomeComponent implements OnInit {
  data: Item[] = [];
  paginaActual: number = 1;
  paginasTotales: number = 5;
  selectedGenre: string = '';
  selectedSorting: string = '';

  //inyectamos el servicio 
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.getData(this.paginaActual);
  }

  //pagina
  // Método para cambiar de página.
  cambioPagina(newPage: number) {
    console.log('Cambiando de pagina a:', newPage);
    this.paginaActual = newPage;
    this.getData(this.paginaActual);
  }

  //filtro
  // Método para cambiar el género.
  onGenreChange(selectedGenre: string) {
    this.selectedGenre = selectedGenre;
    this.getData(this.paginaActual);
  }

  //ordenamiento
  // Método para cambiar el método de ordenamiento.
  onSortingChange(selectedSorting: string) {
    this.selectedSorting = selectedSorting;
    this.getData(this.paginaActual);
  }

  // Método para obtener datos de la API. Metodo Get.
  getData(page: number) {
    const maxPagesToShow = 5;
    if (page > maxPagesToShow || page > this.paginasTotales) {
      return;
    }


    this.apiService.getData(page, this.selectedGenre, this.selectedSorting).subscribe({
      next: (response: ApiResponse) => {
        this.data = response.results.map((item) => ({
          id: item.id,
          poster_path: item.poster_path,
          release_date: item.release_date,
          title: item.title,
          popularity: item.popularity,
          vote_average: item.vote_average,

        }));
      },
      error: (error) => {
        console.error('Error al obtener datos:', error);
      },
    });
  }
}