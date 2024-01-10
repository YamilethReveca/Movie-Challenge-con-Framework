import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-peliculas-detalles',
  templateUrl: './peliculas-detalles.component.html',
  styleUrls: ['./peliculas-detalles.component.scss']
})
export class PeliculasDetallesComponent implements OnInit {
  peliculaDetalles: any;
  imagenes: string = 'http://image.tmdb.org/t/p/w500';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private apiService: ApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log('ID de la ruta:', id);
      this.cargarDetallesPelicula(id);
    });
  }

  cargarDetallesPelicula(id: number) {
    this.apiService.getDetallesPelicula(id).subscribe(
      (detalles: any) => {
        this.peliculaDetalles = detalles;

      },
      (error) => {
        console.error('Error al cargar detalles:', error);
      }
    );
  }

}