import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private apiUrl = 'http://localhost:8085/api/tareas';

  constructor(private http: HttpClient) {}

  getAllTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiUrl);
  }

  getTareaById(id: number): Observable<Tarea> {
    return this.http.get<Tarea>(`${this.apiUrl}/${id}`);
  }

  addTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<any>(this.apiUrl, tarea);
  }

  updateTarea(id: number, tarea: Tarea): Observable<Tarea> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Tarea>(url, tarea);
  }

  deleteTarea(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
