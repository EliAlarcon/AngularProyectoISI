import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavBarTopComponent } from 'src/app/components/nav-bar-top/nav-bar-top.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavBarTopComponent, FooterComponent, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  nombre: string = String(localStorage.getItem('nameOfUser'));
  apellido: string = String(localStorage.getItem('userLastname'));
  carrera: string = String(localStorage.getItem('userCareer'));
  email: string = String(localStorage.getItem('userEmail'));
  ciudad: string = String(localStorage.getItem('userCity'));
  pais: string = String(localStorage.getItem('userCountry'));



}
