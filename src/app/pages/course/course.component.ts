import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

}
