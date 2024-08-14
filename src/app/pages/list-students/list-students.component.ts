import { CommonModule, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavBarTopComponent } from 'src/app/components/nav-bar-top/nav-bar-top.component';
import { Nota } from 'src/app/models/nota';
import { ListStudentsService } from 'src/app/services/list-students.service';

@Component({
  selector: 'app-list-students',
  standalone: true,
  imports: [NavBarTopComponent, NgFor, CommonModule],
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.css'
})
export class ListStudentsComponent {

  dataNotas: any[] = [];
  dataFiltrada: Nota[] = [];
  idMateria = Number(localStorage.getItem('MateriaSeleccionadaID'))

  servicio = inject(ListStudentsService)

  ngOnInit() {
    this.servicio.getNotas().subscribe((nota) => {
      this.dataNotas = nota;

      this.dataNotas.forEach((element) => {
        if (element.tarea.materia.idMateria == this.idMateria) {
          if (this.dataFiltrada.length == 0) {
            this.dataFiltrada.push(element)
          } else {
            const idExiste = this.dataFiltrada.some(filtrado => filtrado.estudiante.idUsuario == element.estudiante.idUsuario);

            if (!idExiste) {
              this.dataFiltrada.push(element);
            }
          }
        }
      })
    })
  }

}
