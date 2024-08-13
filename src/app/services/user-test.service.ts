import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTestService {

  constructor(private http: HttpClient) { }

  private API_TEST = "http://localhost:3000/lista"

  //Obtener estudiantes en la API
  getStudent(): Observable<any>{
    return this.http.get(this.API_TEST)
  }
}
