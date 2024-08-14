import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { Router } from '@angular/router';
import { NavBarTopComponent } from "../../components/nav-bar-top/nav-bar-top.component";

@Component({
  selector: 'app-grades',
  standalone: true,
  imports: [NavBarComponent, NavBarTopComponent],
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.css'
})
export class GradesComponent {

  constructor(private router: Router){}

  nombre = localStorage.getItem('nameOfUser')

  regresar(){
    this.router.navigateByUrl('/curso');
    console.log("Regresando al Curso")
  }


}
