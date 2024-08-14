import { CommonModule, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavBarTopComponent } from 'src/app/components/nav-bar-top/nav-bar-top.component';
import { ListStudentsService } from 'src/app/services/list-students.service';

@Component({
  selector: 'app-list-students',
  standalone: true,
  imports: [NavBarTopComponent, NgFor, CommonModule],
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.css'
})
export class ListStudentsComponent {

  notas:any;

  servicio = inject(ListStudentsService)

  ngOnInit() {
    this.servicio.getNotas().subscribe(nota => {
      this.notas = nota;
    })
  }

}
