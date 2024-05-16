import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { NavigationExtras, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { transpileModule } from 'typescript';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule,RouterLinkActive,RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  username: string="";
  password: string="";
  email: string="";

  constructor(private authService: UserService, private router: Router) { }
  register() {
    if (this.authService.register(this.username, this.password, this.email)) {
      // After successful registration, log in the user
      if (this.authService.login(this.username, this.password)) {
        // If login is successful, navigate to the dashboard or profile page
        this.router.navigate(['']);
      } else {
        alert('Error');
        // Handle login failure if needed
      }
    } else {
      alert('Username already exists');
    }
  }

}


