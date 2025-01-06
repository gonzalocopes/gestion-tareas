import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onRegister() {
    if (!this.email || !this.password) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    alert('Registro exitoso');
    this.router.navigate(['/login']);
  }
}
