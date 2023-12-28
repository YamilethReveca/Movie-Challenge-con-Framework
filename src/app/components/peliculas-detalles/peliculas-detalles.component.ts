import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-peliculas-detalles',
  templateUrl: './peliculas-detalles.component.html',
  styleUrls: ['./peliculas-detalles.component.scss']
})
export class PeliculasDetallesComponent implements OnInit {

  @Input() peliculas: any[] = [];
  @Output() detalles = new EventEmitter<number>();
  peliculaDetalles: any;
  imagenes: string = 'http://image.tmdb.org/t/p/w500';

  constructor(private router: Router,  private apiService: ApiService ) { }


  ngOnInit(): void {}

  // ngOnInit()  {   
  //     this.route.params.subscribe(params => {
  //       const id = params['id'];
  //       console.log('ID de la ruta:', id);
  //       this.cargarDetallesPelicula(id);
  //   });
  // }

  cargarDetallesPelicula(id: number) {
    this.apiService.getDetallesPelicula(id).subscribe(
      (detalles: any) => {
        this.peliculaDetalles = detalles;
        // Puedes agregar más lógica aquí según los detalles recibidos
      },
      (error) => {
        console.error('Error al cargar detalles:', error);
      }
    );
  }

  verDetalles(id: number) {
    this.detalles.emit(id);
    this.router.navigate(['/detalles', id])
  }
}