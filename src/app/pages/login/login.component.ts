import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private service: LoginService, private router: Router) { }

  username: any;
  password: any;

  public static logueado: boolean = false;

  login(formulario: any) {
    console.log(formulario.value);
    this.service.getUsuarios().subscribe((users) => {
      console.log('Usuarios obtenidos:', users);
      let foundUser;

      for (const user of users) {

        if (user.username === formulario.value.username && user.password === formulario.value.password) {
          let userID = user.id;
          let userName = user.nombre;
          let userLastname = user.apellidos;
          let userCareer = user.carrera;
          let userEmail = user.email;
          let userCity = user.ciudad;
          let userCountry = user.pais;
          localStorage.setItem('usuarioID', userID)
          localStorage.setItem('nameOfUser', userName)
          localStorage.setItem('userLastname', userLastname)
          localStorage.setItem('userCareer', userCareer)
          localStorage.setItem('userEmail', userEmail)
          localStorage.setItem('userCity', userCity)
          localStorage.setItem('userCountry', userCountry)
          foundUser = user;
          break;
        }
      }

      if (foundUser) {
        LoginComponent.logueado = true;
        this.router.navigate(['home'])
        localStorage.setItem('username', JSON.stringify(foundUser));
      } else {
        alert('Usuario o contraseña incorrecto!');
      }
    });
  }

}
