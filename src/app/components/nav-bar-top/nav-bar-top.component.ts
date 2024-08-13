import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';

@Component({
  selector: 'app-nav-bar-top',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar-top.component.html',
  styleUrl: './nav-bar-top.component.css'
})
export class NavBarTopComponent {

  constructor(private ruta: Router) { }

  nombre = localStorage.getItem('nameOfUser')

  cerrarSesion() {
    LoginComponent.logueado = false;
    localStorage.setItem('nameOfUser', '');
    localStorage.setItem('usuarioID', '');
    this.ruta.navigate(['']);
  }
}
