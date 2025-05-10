import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // TODO: Add real authentication logic
  }
  onImageLoad(event: Event) {
    (event.target as HTMLImageElement).classList.add('loaded');
  }
  
}
