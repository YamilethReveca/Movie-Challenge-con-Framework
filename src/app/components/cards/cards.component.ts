import { Component, Input  } from '@angular/core';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent {
  @Input() movies: any[] = [];
  imagenes: string = 'http://image.tmdb.org/t/p/w500'

   

}