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
    
    this.service.getUsuarios().subscribe((users) => {
      console.log('Usuarios obtenidos:', users);
      let foundUser;

      console.log(formulario.value.username);
      console.log(formulario.value.password);

      for (const user of users) {

        console.log(user);
        console.log(user.email);
        console.log(user.contrasena);

        if (user.email === formulario.value.username && user.contrasena === formulario.value.password) {
          let userID = user.idUsuario;
          let userName = user.nombre;
          let userLastname = user.apellido;
          let userEmail = user.email;
          let rol = user.tipo;
          localStorage.setItem('usuarioID', String(userID))
          localStorage.setItem('nameOfUser', userName)
          localStorage.setItem('userLastname', userLastname)
          localStorage.setItem('userEmail', userEmail)
          localStorage.setItem('role', rol)
          console.log(rol)
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
