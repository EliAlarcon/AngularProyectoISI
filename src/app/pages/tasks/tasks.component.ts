import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { TareasService } from 'src/app/services/tareas.service';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavBarTopComponent } from 'src/app/components/nav-bar-top/nav-bar-top.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NavBarTopComponent, FooterComponent, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: any[] = [];
  task = { name: '', date: '', description: '' };
  
  constructor(private router: Router, private tareasService: TareasService) { }

  ngOnInit() {
    this.loadTasks();
  }

  /* submitTask() {
    if (this.task.name && this.task.date && this.task.description) {
      this.tareasService.addTarea(this.task).subscribe(() => {
        this.task = { name: '', date: '', description: '' };
        this.loadTasks();
      });
    }
  } */

  editTask(task: any) {
    const updatedName = prompt('Nuevo nombre de la tarea:', task.name);
    const updatedDate = prompt('Nueva fecha de la tarea:', task.date);
    const updatedDescription = prompt('Nueva descripción de la tarea:', task.description);

    if (updatedName !== null && updatedDate !== null && updatedDescription !== null) {
      const updatedTask = { ...task, name: updatedName, date: updatedDate, description: updatedDescription };
      this.tareasService.updateTarea(task.id, updatedTask).subscribe(() => {
        this.loadTasks();
      });
    }
  }

  deleteTask(task: any) {
    if (confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      this.tareasService.deleteTarea(task.id).subscribe(() => {
        this.loadTasks();
      });
    }
  }

  loadTasks() {
    this.tareasService.getAllTareas().subscribe(data => {
      this.tasks = data;
    });
  }

  regresar() {
    this.router.navigateByUrl('/curso');
    console.log("Regresando al Curso");
  }
}
