import { Component } from '@angular/core';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavBarTopComponent } from 'src/app/components/nav-bar-top/nav-bar-top.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, NavBarTopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  

}
