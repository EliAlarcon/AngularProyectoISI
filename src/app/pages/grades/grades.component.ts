import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { Router } from '@angular/router';
import { NavBarTopComponent } from '../../components/nav-bar-top/nav-bar-top.component';
import { GradesService } from 'src/app/services/grades.service';
import { CommonModule } from '@angular/common';

interface DatosNotas {
  id: number;
  tarea: string;
  nota: number;
}

@Component({
  selector: 'app-grades',
  standalone: true,
  imports: [NavBarComponent, NavBarTopComponent, CommonModule],
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.css',
})
export class GradesComponent {
  constructor(private router: Router, private servicio: GradesService) {}

  regresar() {
    this.router.navigateByUrl('/curso/'+this.idMateria);
  }

  nombreMateria = localStorage.getItem('NombreMateriaSeleccionada')
  idMateria = Number(localStorage.getItem('MateriaSeleccionadaID'))
  nombre = localStorage.getItem('nameOfUser');
  idUsuario = Number(localStorage.getItem('usuarioID'));
  dataNotas: any[] = [];
  datosList: DatosNotas[] = [];

  ngOnInit() {
    this.servicio.getNotas().subscribe((notasList) => {
      this.dataNotas = notasList;
      console.log(this.idMateria);
      

      this.dataNotas.forEach((element) => {
        console.log(element);
        if (element.estudiante.idUsuario == this.idUsuario && element.tarea.materia.idMateria === this.idMateria) {
          let nuevoDato: DatosNotas = {
            id: element.estudiante.idUsuario,
            tarea: element.tarea.nombre,
            nota: element.nota,
          };
          this.datosList.push(nuevoDato);
        }
        console.log(this.datosList);
      });
    });
  }

  promedioNotas = (): number => {
    let sumaNotas = this.datosList.reduce(
      (acumulador, current) => acumulador + current.nota,
      0
    );
    let promedio = sumaNotas / this.datosList.length;
    return promedio;
  };
}
