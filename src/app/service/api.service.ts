
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private urlApi = " https://api.themoviedb.org/3/discover/movie"
  //private apiKey = "";
  
  constructor(private http: HttpClient) { }

  getData(pagina: number, genre?: string, sort?: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      //Authorization: `Bearer ${this.apiKey}`,
    });

    let params = new HttpParams().set('page', pagina.toString());
// filtro
    if (genre) {
      params = params.set('with_genres', genre);
    }
//ordenamiento    
    if (sort) {
      params = params.set('sort_by', sort);
    }
    const url = `${this.urlApi}`;

    return this.http.get<any>(url, { headers, params });
  }
}

