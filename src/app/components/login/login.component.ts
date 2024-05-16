import { Component } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, 
    HttpClientModule, 
    FormsModule,
    CommonModule,HomeComponent
  ],
  providers:[UserService],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  username: string ="";
  password: string="" ;

  constructor(private UserService: UserService, private router: Router) { }

  login(){
    if (this.UserService.login(this.username, this.password)) {
      this.router.navigate(['']);
    } else {
      alert('Invalid username or password');
    }
  }
  onReset(form: NgForm): void {
      form.resetForm();
  } 
  navigateToRegister() {
    this.router.navigate(['/signup']);
  }
}
