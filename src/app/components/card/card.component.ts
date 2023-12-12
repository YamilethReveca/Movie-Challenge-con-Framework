import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

interface ApiResponse {
  results: Item[];
}

interface Item {
  poster_path: string;
  release_date: Date;
  title: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  imagenes = 'http://image.tmdb.org/t/p/w500';

  data: Item[] = [];
  constructor(private apiService: ApiService) { }

  pagina = 1;

  ngOnInit(): void {
    this.llenarData(this.pagina);
  }

  llenarData(pagina: number) {
    this.apiService.getData(pagina).subscribe(
      (response: ApiResponse) => {
        this.data = response.results.map(item => ({
          ...item,
          release_date: new Date(item.release_date),

        }));
        console.log(this.data);
      },
      error => {
        if (error.status === 401) {
          console.error('Error de autorización. Asegúrate de tener una clave de API válida.');

        } else {
          console.error('Error al obtener datos:', error);
        }
      }
    );
  }
  next() {

    this.pagina = this.pagina + 1;

    this.llenarData(this.pagina);

  }

  previous() {

    this.pagina = this.pagina - 1;

    this.llenarData(this.pagina);

  }

}

