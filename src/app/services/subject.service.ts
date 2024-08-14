import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from '../models/materia';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private apiUrl = 'http://localhost:8085/api/materias';

  constructor(private http: HttpClient) { }

  getMaterias(): Observable<Materia[]>{
    return this.http.get<Materia[]>(this.apiUrl);
  }
}
