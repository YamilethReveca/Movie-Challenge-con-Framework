
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private urlApi = environment.URLAPI;
  private apiKey = environment.APIKEY;

  constructor(private http: HttpClient) { }

// Método que realiza una solicitud GET con una cabecera

  getData(pagina: number, genre?: string, sort?: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    // Configuración de los parámetros de la solicitud
    let params = new HttpParams().set('page', pagina.toString());
    // filtro
    if (genre) {
      params = params.set('with_genres', genre);
    }
    //ordenamiento    
    if (sort) {
      params = params.set('sort_by', sort);
    }
        // Construcción de la URL para la solicitud GET
    const url = `${this.urlApi}/discover/movie`;

    // Realización de la solicitud GET con las cabeceras y parámetros configurados
    return this.http.get<any>(url, { headers, params });
  }

  // Método que realiza una solicitud GET para obtener detalles de una película por su ID
  getDetallesPelicula(id: number): Observable<any> {   
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    // Realización de la solicitud GET con las cabeceras configuradas
    return this.http.get(`${this.urlApi}/movie/${id}`, { headers });
  }
}

