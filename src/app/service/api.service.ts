
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  private urlApi = " https://api.themoviedb.org/3/discover/movie"
  private apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDdhMzFlNTk5OWNjYjJjMTRhOGQ4NTRhMGYzODhmOCIsInN1YiI6IjY1NzIzNGRiMTcyZDdmMDBhYzYzNzBlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.owsWpCVVZb_HKA23_4kSQ6qF5G_d-ifUV36dkVW0Sq8"

  constructor(private http: HttpClient) { }

  getData(pagina: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const url = `${this.urlApi}?page=${pagina}`;

    return this.http.get<any>(url, { headers });
  }
}


