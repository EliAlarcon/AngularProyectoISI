import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscripcion } from '../models/inscripcion';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private apiUrl = 'http://localhost:8085/api/inscripciones';

  constructor(private http: HttpClient) { }

  getInscripciones(): Observable<Inscripcion[]>{
    return this.http.get<Inscripcion[]>(this.apiUrl);
  }
}
