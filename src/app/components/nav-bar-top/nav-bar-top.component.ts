import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';

@Component({
  selector: 'app-nav-bar-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar-top.component.html',
  styleUrl: './nav-bar-top.component.css'
})
export class NavBarTopComponent {

  constructor(private ruta: Router) { }

  nombre = localStorage.getItem('nameOfUser')
  rol = localStorage.getItem('role')

  cerrarSesion() {
    LoginComponent.logueado = false;
    localStorage.setItem('nameOfUser', '');
    localStorage.setItem('usuarioID', '');
    localStorage.setItem('role', '');
    this.ruta.navigate(['']);
  }
}
