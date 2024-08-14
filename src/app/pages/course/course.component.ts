import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { NavBarTopComponent } from '../../components/nav-bar-top/nav-bar-top.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import { CommonModule } from '@angular/common';
import { TareasService } from 'src/app/services/tareas.service';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [NavBarComponent, NavBarTopComponent, CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicio1: SubjectService,
    private servicio2: TareasService
  ) {}

  idUsuario = Number(localStorage.getItem('usuarioID'));
  idMateria: number | null = null;
  nombreMateria: string = '';
  datosTareas: Tarea[] = [];

  async ngOnInit(): Promise<void> {
    let idString = this.route.snapshot.paramMap.get('id');
    this.idMateria = idString !== null ? Number(idString) : null;
    try {
      await this.obtenerNombreMateria(this.idMateria);
      this.servicio2.getAllTareas().subscribe((tareasList) => {
        tareasList.forEach((element) => {
          if (element.materia.idMateria === this.idMateria) {
            let nuevoDato: Tarea = {
              idTarea: element.idTarea,
              nombre: element.nombre,
              descripcion: element.descripcion,
              materia: element.materia,
            };
            this.datosTareas.push(nuevoDato);
          }
        });
      });
    } catch (error) {
      console.error('Error al obtener la materia:', error);
    }
  }

  obtenerNombreMateria(idMateria: any): Promise<string> {
    return new Promise((resolve, reject) => {
      this.servicio1.getMaterias().subscribe(
        (materia) => {
          materia.forEach((element) => {
            if (element.idMateria == this.idMateria) {
              this.nombreMateria = element.nombre;
              localStorage.setItem('NombreMateriaSeleccionada', element.nombre);
            }
          });
          resolve(this.nombreMateria);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  actividad() {
    this.router.navigateByUrl('/tasks');
    console.log('Ir a la actividad');
  }
}
