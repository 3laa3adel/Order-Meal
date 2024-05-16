import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isLoggedIn= false;

  constructor() { }
  private users = [
    { username: 'user1', password: 'password1', email: 'user1@example.com' },
    { username: 'user2', password: 'password2', email: 'user2@example.com' },
    { username: 'user3', password: 'password3', email: 'user3@example.com' }
  ];
  private currentUser: any; // Variable to store the current logged-in user

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      // Perform any additional login actions (e.g., store user info in session/local storage)
      this.currentUser = user;
      return true;
    } else {
      return false;
    }
  }

  register(username: string, password: string, email: string): boolean {
    const existingUser = this.users.find(u => u.username === username);
    if (existingUser) {
      return false; // Username already exists
    } else {
      this.users.push({ username, password, email });
      //console.log((this.users));
      
      // Perform any additional registration actions (e.g., store user info in session/local storage)
      return true;
    }
  }

  getUsers(): any[] {
    return this.currentUser;
  }


}
