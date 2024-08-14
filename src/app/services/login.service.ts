import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8085/api/usuarios';
  //private usuariosUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiUrl);
  }
  
  /*getUsuarios(): Observable<any> {
    return this.http.get<any>(this.usuariosUrl);
  }

  postUsuarios(usuario: any): Observable<any> {
    return this.http.post<any>(this.usuariosUrl, usuario);
  }*/
}
