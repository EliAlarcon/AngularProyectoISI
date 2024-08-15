import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CourseComponent } from './pages/course/course.component';
import { GradesComponent } from './pages/grades/grades.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ListStudentsComponent } from './pages/list-students/list-students.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    { path: 'curso/:id', component: CourseComponent},
    { path: 'grades', component: GradesComponent},
    { path: 'profile/:idUser', component: ProfileComponent},
    { path: 'tasks', component: TasksComponent},
    { path: 'tareas/:id', component: TasksComponent },
    { path: 'list-students', component: ListStudentsComponent },
    {path: '**', redirectTo: 'login', pathMatch: 'full'}
];