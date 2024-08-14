import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavBarTopComponent } from 'src/app/components/nav-bar-top/nav-bar-top.component';
import { InscriptionService } from 'src/app/services/inscription.service';
import { SubjectService } from 'src/app/services/subject.service';

interface DatosHome {
  curso: string;
  materia: string;
  idMateria: number
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, NavBarTopComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    private servicio1: SubjectService,
    private servicio2: InscriptionService
  ) {}

  idUsuario = Number(localStorage.getItem('usuarioID'));
  rolUsuario = String(localStorage.getItem('role'));
  datosHome: DatosHome[] = [];

  async ngOnInit() {
    if (this.rolUsuario.includes('Estudiante')) {
      try {
        let idCurso = await this.obtenerCurso();
        this.servicio1.getMaterias().subscribe((materiasList) => {
          materiasList.forEach((element) => {
            if (element.curso.idCurso == idCurso) {
              let nuevoDato: DatosHome = {
                curso: element.curso.nombre,
                materia: element.nombre,
                idMateria: element.idMateria
              };
              this.datosHome.push(nuevoDato);
            }
          });
        });
      } catch (error) {
        console.error('Error al obtener el curso:', error);
      }
    } else {
      this.servicio1.getMaterias().subscribe((materiasList) => {
        materiasList.forEach((element) => {
          if (element.profesor.idUsuario == this.idUsuario) {
            let nuevoDato: DatosHome = {
              curso: element.curso.nombre,
              materia: element.nombre,
              idMateria: element.idMateria
            };
            this.datosHome.push(nuevoDato);
          }
        });
      });
    }
  }

  obtenerCurso(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.servicio2.getInscripciones().subscribe(
        (inscripciones) => {
          let idCurso = 0;
          inscripciones.forEach((element) => {
            if (element.estudiante.idUsuario === this.idUsuario) {
              idCurso = element.curso.idCurso;
            }
          });
          resolve(idCurso);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
