import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Peliculas } from '../models/peliculas.model';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http: HttpClient ) { }

  getPeliculas( ): Observable<Peliculas[]> {
    return this.http.get<Peliculas[]>(`${environment.baseUrl}/movies`);
  }

  getPeliculasPorId( id): Observable<Peliculas> {
    return this.http.get<Peliculas>(`${environment.baseUrl}/movies/${id}`);
  }

  updatePeliculasPorId( peli: Peliculas ): Observable<Peliculas> {
    return this.http.put<Peliculas>(`${environment.baseUrl}/movies/${peli.id}`, peli);
  }

  deletePeliculasPorId( id): Observable<Peliculas> {
    return this.http.delete<Peliculas>(`${environment.baseUrl}/movies/${id}`);
  }

  createPeli( peli: Peliculas ): Observable<Peliculas> {
    return this.http.post<Peliculas>(`${environment.baseUrl}/movies`, peli);
  }


}
