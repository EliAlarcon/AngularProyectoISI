import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CourseComponent } from './pages/course/course.component';

export const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'curso', component: CourseComponent},
];