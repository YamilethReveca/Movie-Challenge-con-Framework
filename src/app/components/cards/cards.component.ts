import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent {
  //los posters que son imagenes
  @Input() peliculas: any[] = [];
  imagenes: string = 'http://image.tmdb.org/t/p/w500'


  constructor(private router: Router // Inyecta el Router
  ) { }


// detalles

onDetallesClick(id: number) {
  console.log('Detalles pelicula por id:', id);
  // Aquí puedes realizar cualquier acción necesaria al hacer clic en detalles
  this.router.navigate(['detalles', id]);
}

}

