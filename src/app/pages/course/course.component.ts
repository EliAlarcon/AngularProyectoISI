import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { NavBarTopComponent } from "../../components/nav-bar-top/nav-bar-top.component";
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import { CommonModule } from '@angular/common';
import { TareasService } from 'src/app/services/tareas.service';

interface DatosMaterias {
  nombre: string;
  idCurso: number;
  idProfesor: number;
}

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [NavBarComponent, NavBarTopComponent, CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  constructor(private router: Router, private route: ActivatedRoute, private servicio1: SubjectService, private servicio2: TareasService){}

  idUsuario = Number(localStorage.getItem('usuarioID'));
  idMateria: number | null = null ;
  
  ngOnInit():void{
    let idString = this.route.snapshot.paramMap.get('id');
    this.idMateria = idString !== null ? Number(idString):null;
  }

  actividad(){
    this.router.navigateByUrl('/tasks');
    console.log("Ir a la actividad")
  }
}
