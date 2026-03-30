import { Component, signal } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = signal('');
  senha = signal('');
  mensagem = signal('');

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.email(), this.senha()).subscribe({
      next: () => {
        this.mensagem.set('Login realizado!');
        this.router.navigate(['/home']);
      },
      error: () => this.mensagem.set('Erro no login')
    });
  }
}