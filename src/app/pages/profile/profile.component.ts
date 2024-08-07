import { Component } from '@angular/core';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavBarTopComponent } from 'src/app/components/nav-bar-top/nav-bar-top.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavBarTopComponent, FooterComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
