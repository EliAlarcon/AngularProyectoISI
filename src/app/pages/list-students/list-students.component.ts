import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavBarTopComponent } from 'src/app/components/nav-bar-top/nav-bar-top.component';
import { UserTestService } from 'src/app/services/user-test.service';

@Component({
  selector: 'app-list-students',
  standalone: true,
  imports: [NavBarTopComponent, NgFor],
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.css'
})
export class ListStudentsComponent {

  students:any;

  servicio = inject(UserTestService)

  ngOnInit() {
    this.servicio.getStudent().subscribe(student => {
      this.students = student;
    })
  }

}
