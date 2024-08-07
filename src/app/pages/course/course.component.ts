import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { NavBarTopComponent } from "../../components/nav-bar-top/nav-bar-top.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [NavBarComponent, NavBarTopComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  constructor(private router: Router){}
  actividad(){
    this.router.navigateByUrl('/tasks');
    console.log("Ir a la actividad")
  }
}
