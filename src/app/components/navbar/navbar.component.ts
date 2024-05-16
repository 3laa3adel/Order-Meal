import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports:[FormsModule,RouterModule,RouterOutlet,CommonModule ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

}
