import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nota } from '../models/nota';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  private notas = 'http://localhost:8085/api/notas';

  constructor(private http: HttpClient) { }

  //private notas = 'http://localhost:3000/notas';

  getNotas(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.notas);
  }

  /*postNotas(usuario: any): Observable<any> {
    return this.http.post<any>(this.notas, usuario);
  }*/

}
