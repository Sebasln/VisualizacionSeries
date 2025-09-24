import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define una interfaz para la estructura de tus datos de Series
export interface Series {
  ID: number; // Asumiendo que hay un ID
  title: string; // Asumiendo que hay un título
  // Puedes añadir más propiedades según la estructura real de tu backend
}

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiUrl = '/api/odata/v4/series-tracker/Series'; // Usamos '/api' que será reescrito por el proxy

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Series[]> {
    return this.http.get<Series[]>(this.apiUrl);
  }
}
