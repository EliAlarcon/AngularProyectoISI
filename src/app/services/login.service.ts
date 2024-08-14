import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private usuariosUrl = 'http://localhost:3000/usuarios';

  getUsuarios(): Observable<any> {
    return this.http.get<any>(this.usuariosUrl);
  }

  postUsuarios(usuario: any): Observable<any> {
    return this.http.post<any>(this.usuariosUrl, usuario);
  }
}
