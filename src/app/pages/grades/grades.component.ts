import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { Router } from '@angular/router';
import { NavBarTopComponent } from "../../components/nav-bar-top/nav-bar-top.component";
import { GradesService } from 'src/app/services/grades.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grades',
  standalone: true,
  imports: [NavBarComponent, NavBarTopComponent, CommonModule],
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.css'
})
export class GradesComponent {

  constructor(private router: Router, private servicio: GradesService) { }

  regresar() {
    this.router.navigateByUrl('/curso');
    console.log("Regresando al Curso")
  }

  nombre = localStorage.getItem('nameOfUser')
  idUsuario = Number(localStorage.getItem('usuarioID'))
  dataNotas: any[] = [];
  notas: any[] = [];
  

  ngOnInit() {
    this.servicio.getNotas().subscribe(notas => {
      this.dataNotas = notas;
      this.notas = [];

      for (let item of this.dataNotas) {
        if (item.idUser === this.idUsuario) {
          this.notas.push(item); 
        }
      }
    });
  }

}
