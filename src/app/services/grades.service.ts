import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  constructor(private http: HttpClient) { }

  private notas = 'http://localhost:3000/notas';

  getNotas(): Observable<any> {
    return this.http.get<any>(this.notas);
  }

  postNotas(usuario: any): Observable<any> {
    return this.http.post<any>(this.notas, usuario);
  }

}
