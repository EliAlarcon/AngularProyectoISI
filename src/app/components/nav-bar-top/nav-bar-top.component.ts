import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';

@Component({
  selector: 'app-nav-bar-top',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar-top.component.html',
  styleUrl: './nav-bar-top.component.css'
})
export class NavBarTopComponent {

  constructor(private ruta: Router) { }

  nombre = localStorage.getItem('nameOfUser')
  id = localStorage.getItem('usuarioID')

  cerrarSesion() {
    LoginComponent.logueado = false;
    localStorage.setItem('nameOfUser', '');
    localStorage.setItem('usuarioID', '');
    this.ruta.navigate(['']);
  }
}
