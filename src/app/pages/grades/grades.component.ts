import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-grades',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.css'
})
export class GradesComponent {
  constructor(private router: Router){}
  regresar(){
    this.router.navigateByUrl('/curso');
    console.log("Regresando al Curso")
  }
}
