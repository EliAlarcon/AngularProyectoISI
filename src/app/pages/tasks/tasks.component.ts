import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavBarTopComponent } from 'src/app/components/nav-bar-top/nav-bar-top.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NavBarTopComponent, FooterComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {  
  constructor(private router: Router){}
  regresar(){
    this.router.navigateByUrl('/curso');
    console.log("Regresando al Curso")
  }
  task = { name: '', date: '', description: '' };
  tasks = [];

  ngOnInit() {
    this.loadTasks();
  }

  submitTask() {
    if (this.task.name && this.task.date && this.task.description) {

      this.task = { name: '', date: '', description: '' };
      this.saveTasks();
    }
  }

  editTask(task: { name: string | undefined; date: string | undefined; description: string | undefined; }) {
    const updatedName = prompt('Nuevo nombre de la tarea:', task.name);
    const updatedDate = prompt('Nueva fecha de la tarea:', task.date);
    const updatedDescription = prompt('Nueva descripción de la tarea:', task.description);

    if (updatedName !== null && updatedDate !== null && updatedDescription !== null) {
      task.name = updatedName;
      task.date = updatedDate;
      task.description = updatedDescription;
      this.saveTasks();
    }
  }

  deleteTask(task: any) {
    if (confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      this.tasks = this.tasks.filter(t => t !== task);
      this.saveTasks();
    }
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTasks() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
}