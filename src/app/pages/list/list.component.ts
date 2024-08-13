import { Component } from '@angular/core';
import { NavBarTopComponent } from 'src/app/components/nav-bar-top/nav-bar-top.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NavBarTopComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

}
